import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/header';
import PokeCard from '../pokecard/pokecard';
import Box from '@mui/material/Box';

const Searched = ({poke, authService, loves, onLoveChange}) => {
    const locationParam = useLocation();
    const [loading, setLoading] = useState(false);
    const [selectedPoke, setSelectedPoke] = useState(null);
    useEffect(() => {
        // 결과가 없을 때 경우도 만들기
        setLoading(true);
        async function fncGetPoke(){
            try{
                const result = await poke.getPoke(locationParam.state.id);                
                setSelectedPoke(result);
                setLoading(false);
            }catch(error){
                setSelectedPoke(null);
                setLoading(false);
            }
            
        }
        fncGetPoke();
    },[locationParam.state.id, poke]);
    return (
        <>
            <Header authService={authService} loves={loves} />
            <h1>검색된 포켓몬</h1>
            <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', m:1}}>
            {
                loading && <p>loading...</p>
            }
            {
                !loading && !selectedPoke && <p>해당하는 포켓몬이 없습니다.</p>
            }
            {
                !loading && selectedPoke && <PokeCard pokeCard={selectedPoke} onLoveChange={onLoveChange} loveState={loves[locationParam.state.id] || null} />
            }
            </Box>
        </>
    )
};

export default Searched;