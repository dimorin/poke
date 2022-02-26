import React from 'react';
import PokeCard from '../pokecard/pokecard';
import Box from '@mui/material/Box';
const PokeList = ({pokeCards, onLoveChange, loves}) => {
    return (
        <>
            <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', m:1}}>
                {pokeCards.map(pokeCard => <PokeCard key={pokeCard.id} pokeCard={pokeCard} onLoveChange={onLoveChange} loveState={loves[pokeCard.id] || null} />)}            
            </Box>
        </>
        
    )
};

export default PokeList;