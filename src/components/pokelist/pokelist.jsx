import React from 'react';
import PokeCard from '../pokecard/pokecard';
import Box from '@mui/material/Box';
const PokeList = ({pokecards}) => {
    return (
        <Box sx={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center', ml:-1, mr:-1, mt:1, mb:1}}>
            {pokecards.map(pokecard => <PokeCard key={pokecard.id} poke={pokecard} />)}            
        </Box>
    )
};

export default PokeList;