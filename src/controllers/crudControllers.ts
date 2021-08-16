const users = [
    {
        id: 1,
        name: "John",
        age: 20
    },
    {
        id: 2,
        name: "George",
        age: 17
    },
    {
        id: 3,
        name: "Tim",
        age: 27
    },
    {
        id: 4,
        name: "Pete",
        age: 23
    },
    {
        id: 5,
        name: "Maria",
        age: 31
    },
    {
        id: 6,
        name: "Robert",
        age: 20
    },
    {
        id: 7,
        name: "David",
        age: 17
    },
    {
        id: 8,
        name: "Charles",
        age: 27
    },
    {
        id: 9,
        name: "Daniel",
        age: 23
    },
    {
        id: 10,
        name: "Paul",
        age: 31
    }
];

const crudControllers = {
    getAllUsers(req, res) {
        res.send(users)
    },

    addUser(req, res) {
        const data = req.body;
        data.id = users.length + 1
        users.push(data)

        res.send(`User added`)
    },

    changeUser(req, res) {
        const id = +req.params.id;
        const bodyData = req.body;
        let currentUser = users.find((user, index) => {
            return user.id === id
        })

        currentUser = {...currentUser, ...bodyData, id: users.length + 1,}

        res.send(currentUser)
    },

    deleteUser(req, res) {
        const id = +req.params.id;
        
        users.forEach((user, index) => {
            if (user.id === id) {
                users.splice(index, 1)
            }
        })
        
        res.send(`user with id: ${id} was succesfully deleted`)
        
    }
}

export default crudControllers