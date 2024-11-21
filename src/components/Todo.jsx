import React from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const mockupTodoData = [
    {
        id: 1,
        isDone: false,
        task: '수업 복습하기',
        createdDate: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        task: '밥먹기',
        createdDate: new Date().getTime(),
    },
    {
        id: 3,
        isDone: false,
        task: '러커 그리기',
        createdDate: new Date().getTime(),
    },
];

const Todo = () => {
    return (
        <div>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </div>
    );
};

export default Todo;
