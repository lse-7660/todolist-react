import React from 'react';

const TodoItem = ({ task, isDone, createdDate }) => {
    return (
        <li>
            <input type="checkbox" checked={isDone} />
            <strong>{task}</strong>
            <span>{createdDate}</span>
            <button>삭제</button>
        </li>
    );
};

export default TodoItem;
