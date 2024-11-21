'use Client';

import classNames from 'classnames';
import React, { useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');
    const onSubmit = () => {
        addTodo(task);
        setTask('');
    };
    const onChangeTask = (e) => {
        setTask(e.target.value);
    };

    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <form>
                <input type="text" placeholder="할 일을 추가로 입력해주세요" value={task} onChange={onChangeTask} />

                <button
                    type="submit"
                    onClick={onSubmit}
                    disabled={!task}
                    className={classNames('p-3 text-white', task ? 'bg-sky-500' : 'bg-gray-200')}
                >
                    할 일 추가
                </button>
            </form>
        </div>
    );
};

export default TodoEditor;
