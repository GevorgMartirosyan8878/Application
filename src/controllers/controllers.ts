import * as fs from 'fs';
import * as path from 'path';
import utils from "../utils/utils";

const controllers = {

    readFile(req, res) {
        const readFilePath = path.resolve(__dirname, '../readableFile.txt/')
        
        const readStream = fs.createReadStream(readFilePath);

        readStream.on('open', (chunk) => {
            readStream.pipe(res)             
        })

        readStream.on('error', err => console.log(err.message));
    },

    writeFile(req, res) {
        const writePath = path.resolve(__dirname, '../write.here/config.json');
        const readPath = path.resolve(__dirname, '../readableFile.txt/');

        const readStream = fs.createReadStream(readPath, 'utf8');
        const writeStream = fs.createWriteStream(writePath);

        let text = '';

        readStream.on('data', (chunk) => {
            text += chunk;
            let workWithText = text.split('\r\n');

            workWithText.forEach(item => {
                utils.checkForNested(item)
                    ? utils.recCheck(item)
                    : utils.createSimpleProp(item)
            })

            writeStream.write(JSON.stringify(Object.fromEntries(utils.targetJson)))
            readStream.pipe(writeStream)
        })

        res.send('done')

    },

}

export default controllers