import React, { useEffect, useState } from 'react';

const Users = () => {
    const [user, setUsers] = useState([])
    const [term, setTerm] = useState("")


    useEffect(() => {

        const getUsers = async () => {

            const callUsers = await fetch("https://jsonplaceholder.typicode.com/users")
            const response = await callUsers.json();
            setUsers(response)
        }

        getUsers();

    }, [])

    let renderUsers = user.map((user) => {
        return (
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })

    let filteredUsers = user.filter(({ name }) => name.toLowerCase().indexOf(term.toLowerCase()) >= 0).map(({ id, name }) => {
        return (
            <div key={id}>
                <p>
                    <strong>{name}</strong>
                </p>
            </div>
        )
    })

    return (
        <React.Fragment>
            <input type="text" onChange={(e) => setTerm(e.target.value)} />
            {filteredUsers}
        </React.Fragment>
    )
}

export default Users;