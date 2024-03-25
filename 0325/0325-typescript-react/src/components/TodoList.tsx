import { useRef, useState } from 'react';
import { TodoItemProps } from '../types';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemProps[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState<string>(''); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos); // 전체 투두에 새로운 투두 추가
    setNewTodo(''); // input 초기화
  };

  // 엔터 입력시 투두 추가 (키보드 이벤트)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const focusInput = () => {
    inputRef.current?.focus(); // null 일 수 있기 때문에 ? 추가
  };

  // 투두 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        완료 개수 : {todos.filter((todo) => todo.completed === true).length}
      </div>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown} // 엔터키 이벤트 핸들러 추가
          ref={inputRef}
        />
        <button onClick={addTodo}>ADD</button>
        <button onClick={focusInput}>FOCUS</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}
