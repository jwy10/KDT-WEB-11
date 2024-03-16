import { useState } from 'react';

export default function Visitor() {
  const [list, setList] = useState([
    { visit: '코디', email: 'codi@gmail.com' },
  ]);

  const [inputVisitor, setInputVisitor] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addList = () => {
    if (inputVisitor.trim().length === 0) {
      return;
    }
    if (inputEmail.trim().length === 0) {
      return;
    }

    const newList = list.concat({
      visit: inputVisitor,
      email: inputEmail,
    });
    setList(newList);
    setInputVisitor('');
    setInputEmail('');
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.keyCode === 13) addList();
  };

  const deleteList = (visit) => {
    const newList = list.filter((list) => {
      return list.visit != visit;
    });
    setList(newList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름입력"
        value={inputVisitor}
        onChange={(e) => {
          setInputVisitor(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <input
        type="text"
        placeholder="이메일입력"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <button onClick={addList}>등록 </button>

      <ol>
        {list.map((value, idx) => {
          return (
            <li key={idx} onDoubleClick={() => deleteList(value.visit)}>
              {value.visit}
              {value.email}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
