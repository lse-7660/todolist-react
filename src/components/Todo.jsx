'use client';
import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockupTodoData } from '@/data/todoData';

const Todo = () => {
    const [todos, setTodos] = useState(mockupTodoData);
    return (
        <div>
            <TodoHd />
            <TodoEditor />
            <TodoList mockupTodoData={todos} />
        </div>
    );
};

export default Todo;
