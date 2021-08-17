const crudUtils = {
    users: [
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
    ],
    deleteUser(id) {
        this.users.forEach((user, index) => {
            if (user.id === id) {
                this.users.splice(index, 1)
            }
        })
    },

    addNewUser(data) {
        data.id = this.users.length + 1
        this.users.push(data)
    }
}

export default crudUtils