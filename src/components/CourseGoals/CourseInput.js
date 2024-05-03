import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import './CourseInput.css';

const CourseInput = () => {
  const [] = (useState = () => {});
  const formSubmitHandler = (e) => {
    e.preventDefalt();

    onAdd(enteredText);
    setEnteredTest;
  };

  const textChangeHandler = (e) => {
    setEnteredTest(e.target.value);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text" onChange={textChangeHandler} value={enteredText} />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );  W;
};

export default CourseInput;
