import React, { useCallback, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Interest from './components/interest/interest';
import Login from './components/login/login';
import Searched from './components/searched/searched';

const App = ({poke, authService, loveRepository}) => {
  const [loves,setLoves] = useState({}); // <-- 이 데이터들을 전역에서 관리할 수 있는 방법 찾아보기(redux)
  const [userUid, setUserUid] = useState(null);
  const onSetUserUid = (id) => {
    setUserUid(id);
  }
  const onGetLoves = useCallback((loves, userUid) => {
    setLoves(loves);
    setUserUid(userUid);
  }, []);
  const onLoveChange = (id, state) => {
    setLoves(pre => {
      const updated = {...pre, [id]:state};
      loveRepository.saveLoves(userUid, updated);
      return updated;
    });
  }
  
  return (
    <Routes>
      <Route path="/" element={<Login authService={authService} onSetUserUid={onSetUserUid} />}></Route>
      <Route path="/home" element={<Home poke={poke} authService={authService} loveRepository={loveRepository} loves={loves} onLoveChange={onLoveChange} onGetLoves={onGetLoves} userUid={userUid} />} />      
      <Route path="/interest" element={<Interest poke={poke} authService={authService} loves={loves} onLoveChange={onLoveChange} />}></Route>
      <Route path="/searched" element={<Searched poke={poke} authService={authService} loves={loves} onLoveChange={onLoveChange} />} />
    </Routes>    
  )
};

export default App;