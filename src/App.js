import './App.css';
import React, { useState } from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import CourseList from './components/CourseGoals/CourseList';
import CourseInput from './components/CourseGoals/courseInput';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 고수되기',
  },
];
function App() {
  const [goals, setGoals] = useState(DUMMY_DATA);

  //input에게 전달할 함수
  const addGoalHandler = (text)=>{
const newGoal = {
  id:Math.random().toString(),
  text,
}

//상태변수(배열)수정
// setGoals([...goals,newGoal]);
setGoals((preGoals )=>[...prevGoals,newGoal]);
  }

  const deleteGoalHandler = (id)=>{
    // const updateGoals = [...goals];
    // const index= updateGoals.findIndex((goal)=>goal.id===id);
    // updateGoals.splice(index,1);
    // setGoals(updateGoals);


    // const updateGoals = goals.filter((goal)=>goal.id !==id);
    setGoals(goals.filter((goal)=>goal.id !==id));
  }


  // CourseList 조건부 렌더링
  let listContent = (
    <p
      style={{
        color: 'red',
        fonrsize: '2em',
        textAlign: 'center',
      }}
    >
      목표를 등록해 주세요
    </p>
  );

  if (goals.length > 0) {
    listContent = <CourseList items={goals} />;
  }

  return (
    <div>W
      <section id="goal-form">
        <CourseInput onAdd = {addGoalHandler};
        <CourseInput />
      </section>
      <section id="goals">{listContent}</section>
    </div>
  );
}

export default App;
