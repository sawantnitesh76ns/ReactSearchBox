import React, { useEffect, useState } from 'react';

const ToDos = () => {
    const [todos, setTodos] = useState([])
    const [term, setTerm] = useState("")


    useEffect(() => {

        const getTodods = async () => {

            const callTodos = await fetch("https://jsonplaceholder.typicode.com/todos")
            const response = await callTodos.json();
            setTodos(response)
        }

        getTodods();

    }, [])

    let filteredToDos = todos.slice(0, 10).filter(({ title }) => title.toLowerCase().indexOf(term.toLowerCase()) >= 0).map(({ id, title }) => {
        return (
            <div key={id}>
                <p>
                    <strong>{title}</strong>
                </p>
            </div>
        )
    })

    return (
        <React.Fragment>
            <input type="text" onChange={(e) => setTerm(e.target.value)} />
            {filteredToDos}
        </React.Fragment>
    )
}

export default ToDos;