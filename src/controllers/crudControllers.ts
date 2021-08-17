import crudUtils from "../utils/crudUtils";

const crudControllers = {

    getAllUsers(req, res) {
        res.send(crudUtils.
            users)
    },

    addUser(req, res) {
        const data = req.body;
        crudUtils.
        addNewUser(data)

        res.send(`User added`)
    },

    changeUser(req, res) {
        const id = +req.params.id;
        const bodyData = req.body;
        let currentUser = crudUtils.
        users.find((user) => {
            return user.id === id
        })

        currentUser = {...currentUser, ...bodyData, id: crudUtils.
                users.length + 1,}

        res.send(currentUser)
    },

    deleteUser(req, res) {
        const id = +req.params.id;

        crudUtils.deleteUser(id)
        
        res.send(`user with id: ${id} was succesfully deleted`)
        
    }
}

export default crudControllers