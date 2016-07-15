
export function saveAudioSampleTXT(data: Int16Array, file: string): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (err: any) => void) => {
        var fs = require('fs');
        var s = "";
        for (let i = 0; i < data.length; i++)
            s += data[i].toString() + ";\r\n";

        fs.writeFile(file + ".txt", s, function (err) {
            if (err)
                return reject(err);
            return resolve();
        });
    });
}

var fs = require('fs');
var wav = require('wav');

export function saveAudioSampleWAV(data: Int16Array, fileName: string): Promise<void> {


    let WavEncoder = require("wav-encoder");

    let f = new Float32Array(data.length);
    for (let i = 0; i < data.length; i++)
        f[i] = data[i] / 32768;

    const wavData = {
        sampleRate: 8192,
        channelData: [
            f
        ]
    };

    return WavEncoder.encode(wavData).then((buffer) => {
        fs.writeFileSync(fileName, new Buffer(buffer));
    });
}