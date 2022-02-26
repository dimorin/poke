import { useEffect } from 'react';
import Header from '../header/header';
import Recommand from '../recommand/recommand';

const Home = ({poke, authService, loveRepository, loves, onLoveChange, onGetLoves, userUid}) => { 
  useEffect(() => {
    const stopRead = loveRepository.readLoves(userUid, loves => onGetLoves(loves, userUid));
    return () => stopRead(); // unmount 될 때는 읽어오는 거 중지
  }, [loveRepository, onGetLoves, userUid])
  return (
    <>
      <Header authService={authService} loves={loves} />        
      <Recommand poke={poke} loves={loves} onLoveChange={onLoveChange} />        
    </>
  );
};

export default Home;