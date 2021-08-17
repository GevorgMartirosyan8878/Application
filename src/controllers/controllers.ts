import * as fs from 'fs';
import * as path from 'path';

let targetJson = new Map();

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
        const writePath = path.resolve(__dirname, '../write.here/new.json');
        const readPath = path.resolve(__dirname, '../readableFile.txt/');

        const readStream = fs.createReadStream(readPath, 'utf8');
        const writeStream = fs.createWriteStream(writePath);

        let text = '';

        readStream.on('data', (chunk) => {
            text += chunk;
            let workWithText = text.split('\r\n');
            console.log('////', workWithText)

            workWithText.forEach(item => {

                if ( item.includes('.') ) {
                    const idx = item.indexOf('.');
                    let keyOfNested = item.slice(0, idx);

                    if (targetJson.has(keyOfNested)) {
                        let keyValueArr = item.slice(idx + 1).split(' = ');
                        targetJson.get(keyOfNested)[keyValueArr[0]] = keyValueArr[1]
                    }else {
                        targetJson.set(keyOfNested, {});
                        let keyValueArr = item.slice(idx + 1).split(' = ');
                        targetJson.get(keyOfNested)[keyValueArr[0]] = keyValueArr[1]
                    }

                } else {
                    let keyValueArr = item.split(' = ');
                    targetJson.set(keyValueArr[0], keyValueArr[1])
                }

            })
            console.log('result: --- ', targetJson )
            writeStream.write(JSON.stringify(Object.fromEntries(targetJson)))
            readStream.pipe(writeStream)
        })

        res.send('done')


    },

}


function createObj(keyName) {
    return {[keyName]: {}}
}

function setObj(keyName) {
    return {[keyName]: {}}
}

export default controllers