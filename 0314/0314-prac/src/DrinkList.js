import { useState } from 'react';
import Drink from './Drink';

export default function DrinkList() {
  const [data, setData] = useState({
    text: '원하는 음료를 골라주세요!',
  });
  return (
    <div>
      <h1>메뉴판</h1>
      <Drink data={data} />
    </div>
  );
}
