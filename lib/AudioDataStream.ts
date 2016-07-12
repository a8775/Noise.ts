import child_process = require('child_process');
import stream = require('stream');

export class AudioDataStream extends stream.Readable {
    private ps = null;
    private audio = new stream.PassThrough;
    private info = new stream.PassThrough;

    constructor(freq: number) {
        super();
    }

    public start(): void {
        if (this.ps == null) {
            this.ps = child_process.spawn('sox.exe', ['-t', 'waveaudio', '0', '-t', 's16', '-r', '8192', '-', 'remix', '-a', '-']);

            this.ps.stdout.pipe(this.audio);
            this.ps.stderr.pipe(this.info);

            this.audio.on('end', () => {
                this.push(null);
            });
            this.audio.on('readable', () => {
                this.read(0);
            });

            this.info.on('data', function (data) {
                //process.stdout.write(data);
            });
        }
    }

    public stop(): Promise<void> {
        if (this.ps) {
            this.ps.kill();
            this.ps = null;
            return Promise.resolve();
        }
        return Promise.reject("Error: AudioData not started!");
    }

    public _read(n: number): void {
        var chunk = this.audio.read();
        if (chunk)
            this.push(chunk);
        else
            this.push('');
    }
}
