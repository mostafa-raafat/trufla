import * as fs from 'fs';
import * as mkdirp from 'mkdirp';

export class Reporter {

    public static createReporterFile(dirName: string) {
        // Check if the directory exist
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }
}
