import React from 'react';

const TodoList = () => {
    return (
        <div>
            <h2>할 일 목록</h2>
            <input type="text" placeholder="검색어를 입력하세요" />
            <div>
                {/* -------------todo item------------- */}
                <input type="checkbox" />
                <strong>고양이 밥주기</strong>
                <span>2024.04.22</span>
                <button>삭제</button>
            </div>
        </div>
    );
};

export default TodoList;
