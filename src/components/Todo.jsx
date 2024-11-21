'use client';
import React, { useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { mockupTodoData } from '@/data/todoData';

const Todo = () => {
    const [todos, setTodos] = useState(mockupTodoData);

    // 할 일 추가하는 함수

    const addTodo = (task) => {
        setTodos([
            ...todos,
            { id: todos.length + 1, isDone: false, task: task, createdDate: new Date().toLocalDateString },
        ]);
    };

    return (
        <div className="flex flex-col gap-10 px-10 py-20">
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList mockupTodoData={todos} />
        </div>
    );
};

export default Todo;
