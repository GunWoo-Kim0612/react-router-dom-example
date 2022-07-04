import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

// BrowserRouter : Router 상위 컴포넌트... <App/>를 감싸주는역할로 썼음
// HashRouter : 마찬가지.. 기능적으로는 url에 #이 붙고...  NotFound상태에서 실행할경우 이전 주소가 사라지지않고  /#~~~가 덧대어진다 

import './index.css';
// 직접 App를 만들어보자
// import App from './App';
import reportWebVitals from './reportWebVitals';


// App.js가 아님
function App() {
  return (
    <>
      <h1>Hello React Router Dom</h1>
      <ul>
      <h3>a태그 라우터 : 새로고침됨(깜빡거림)</h3>
        <li><a href='/home'>Home</a></li>
        <li><a href='/topics'>Topics</a></li>
        <li><a href='/contact'>Contact</a></li>
        <br/>

      {/* 클릭시 새로고침(깜빡거리는)이 되는데 이를 없애주는 기능 */}
      <h3>Link태그 라우터 : 새로고침x</h3>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <br/>

      <h3>NavLink태그 라우터 : 새로고침x, 클릭시 class속성에 active값이 자동적으로 들어감</h3>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/topics'>Topics</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>


      </ul>

      {/* 이벤트가 아닌 라우터를 이용한 ... */}
      
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/topics' element={<Topics />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
        {/* 정해진 주소값 이외는 NotFound  */}
        <Route exact path='*' element={'Not Found'}>Not Found</Route>
      </Routes>
    </>
  );
}



function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}


function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}












////////////////////////////////////////////////////////////////////////////////////////

// 아래에 간결한 형태로 변경함  (App을 만들어 사용했다.)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// 이후 import ReactDOM from 'react-dom/client'; 에서 /client 삭제
// ReactDOM.render(<App />, document.getElementById('root'));

// router사용시 상위컴퍼넌트인 BrowserRouter를 감싸주어야 한다
// ReactDOM.render(<BrowserRouter> <App /></BrowserRouter>, document.getElementById('root'));
ReactDOM.render(<HashRouter> <App /></HashRouter>, document.getElementById('root'));
////////////////////////////////////////////////////////////////////////////////////////




reportWebVitals();
