import { useCallback, useEffect, useState } from 'react';
import './app.css';
import SearchHeader from './components/searchheader/searchheader';
import PokeCard from './components/pokecard/pokecard';
import PokeList from './components/pokelist/pokelist';
import Box from '@mui/material/Box';

function App({poke}) {
  const [selectedPoke, setSelectedPoke] = useState(null);
  const [pokecards,setPokeCards] = useState([]);
  const onSearchPoke = useCallback((query) => {
    poke.getPoke(query).then((result) => {
      setSelectedPoke(result);
    });
  }, [poke]);
  const onInputQueryChange = () => {
    setSelectedPoke(null);
  }
 
  useEffect( () => {
    function shuffleNumber(total,pick){ // total갯수 중 pick 개
      const numbers = Array(total).fill(0).map((item,index) => index+1);
      numbers.sort(()=> Math.random() - 0.5);
      return numbers.slice(0,pick);
    }
    
    async function fetchData (){
      console.log(shuffleNumber(898,5));
      Promise.all(
        shuffleNumber(898,5).map((item) => {
          return poke.getPoke(item)
        })
      ).then((result) => {
        setPokeCards(result);
      })
    };
    fetchData();
  }, [poke]);
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100%'}} >
    
      <Box>
      <SearchHeader onSearchPoke={onSearchPoke} onInputQueryChange={onInputQueryChange} />
      {selectedPoke && <PokeCard poke={selectedPoke} />}  
      
      {!selectedPoke &&<PokeList pokecards={pokecards} />    }
      </Box>
        
    </Box>
    
  );
}

export default App;
