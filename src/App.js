import './App.css';
import React, { useState } from 'react';
import Login from './components/sideEffect/Login/Login';
import MainHeader from './components/sideEffect/MainHeader/MainHeader';
import Home from './components/sideEffect/Home/Home';

const App = () => {
  //로그인 상태를 관리하는 변수
  const [isLoggedIn, setisLoggedIn] = useState(false);

  //화면이 리렌더링 될 때 localStorage를 확인해서
  //현재 login-flag가 존재하는지 검사
  const storedLoginFlag = localStorage.getItem('login-flag');
  if (storedLoginFlag === '1') {
    setisLoggedIn(true);
  }

  //서버로 로그인을 요청하는 함수.(나중에는 fetch를 통한 백엔드와의
  //연계가 필요합니다.)
  const loginHandler = (email, password) => {
    //로그인을 했다는 증거로 상태값 변경 및 브라우저에 로그인값을
    //1로 표현해서 저장.(이전에는 로그인 유지를 session 사용)->여기서는 사용 불가능
    localStorage.setItem('login-flag', '1'); //localstorage:브라우저에서 제공하는 저장소
    setisLoggedIn(true);
  };

  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;
