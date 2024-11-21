import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mockupTodoData }) => {
    return (
        <div>
            <h2>할 일 목록</h2>
            <input type="text" placeholder="검색어를 입력하세요" />
            <ul>{mockupTodoData.map((item) => (console.log(item), (<TodoItem key={item.id} {...item} />)))}</ul>
        </div>
    );
};

export default TodoList;
