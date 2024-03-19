import React from 'react';
import { useForm } from 'react-hook-form';

export default function HookFormEx() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체 - errors
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();
  const onValid = (data) => {
    console.log('onValid', data);
  };

  const onInValid = (err) => {
    console.log('onInValid', err);
  };

  console.log('errors', errors);
  console.log('watch', watch('username'));
  return (
    <div>
      <h1>react-hook-form 실습</h1>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="이름"
          // name='username' 기능
          {...register('이름', {
            required: '이름은 필수항목입니다',
            minLength: {
              message: '이름은 최소 2글자 이상 작성해주세요',
              value: 0,
            },
          })}
        />
        {/* 에러 메시지 */}
        {errors.이름?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register('number', {
            required: '나이를 입력하세요.',
            validate: {
              notMinus: (value) => {
                return value > 0 || '0 이상의 숫자만 가능합니다.';
              },
            },
          })}
        />
        {errors.number?.message}

        <br />
        <button type="submit">제출</button>
      </form>
    </div>
  );
}
