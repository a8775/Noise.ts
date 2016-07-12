
export function saveAudioSampleTXT(data: Int16Array, file: string): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (err: any) => void) => {
        var fs = require('fs');
        var s = "";
        for (let i = 0; i < data.length; i++)
            s += data[i].toString() + ";\r\n";
        
        fs.writeFile(file, s, function (err) {
            if (err)
                return reject(err);
            return resolve();
        });
    });
}

