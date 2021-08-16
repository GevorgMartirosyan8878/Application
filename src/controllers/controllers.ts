import * as fs from 'fs';
import * as path from 'path';



const controllers = {
    readFile(req, res) {
        const readFilePath = path.resolve(__dirname, '../readableFile.txt/')
        
        const readStream = fs.createReadStream(readFilePath);
        
        let readed = ''

        readStream.on('open', (chunk) => {
            readStream.pipe(res)             
        })

        // readStream.on('open', () => console.log('open'));
        // readStream.on('close', () => console.log('close'));
        readStream.on('error', err => console.log(err.message));

        // res.send(readStream)
    },

    writeFile(req, res) {


    },

    // getAllUsers(req, res) {
    //     res.send(users)
    // },

    // addUser(req, res) {
    //     const data = req.body;
    //     data.id = users.length + 1
    //     users.push(data)

    //     res.send(`User added`)
    // },

    // changeUser(req, res) {
    //     const id = +req.params.id;
    //     const bodyData = req.body;
    //     let currentUser = users.find((user, index) => {
    //         return user.id === id
    //     })

    //     currentUser = {...currentUser, ...bodyData, id: users.length + 1,}

    //     res.send(currentUser)
    // },

    // deleteUser(req, res) {
    //     const id = +req.params.id;
        
    //     users.forEach((user, index) => {
    //         if (user.id === id) {
    //             users.splice(index, 1)
    //         }
    //     })
        
    //     res.send(`user with id: ${id} was succesfully deleted`)
        
    // }
}


export default controllers