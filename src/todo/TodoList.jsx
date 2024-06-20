import React from "react";
import IconButton from "../template/iconButton";

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton 
                        hide={todo.done}
                        btnStyle='success' 
                        icon='check'
                        onClick={() => props.handleMarkAsDone(todo)}/>

                    <IconButton 
                        hide={!todo.done}
                        btnStyle='warning' 
                        icon='undo'
                        onClick={() => props.handleMarAsPending(todo)}/>
                        
                    <IconButton
                        hide={!todo.done}
                        btnStyle='danger'
                        icon='trash-o'
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr>
        ))
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList