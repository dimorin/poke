import { useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const SearchHeader = ({onSearchPoke, onInputQueryChange}) => {
    const inputRef = useRef();
    const onInputChange = () => {
        !inputRef.current.value && onInputQueryChange();
    };
    const onInput = (event) => {        
        if(event.key === 'Enter'){
          onSearchPoke(inputRef.current.value);
        }
    };
    const onButtonClick = () => {
        onSearchPoke(inputRef.current.value);
    };
    return (
        <Container maxWidth="md" sx={{display:'flex',alignItems:'center',pt:5}}>
            <Box sx={{flexShrink:0}}>
            <Typography variant="h4" component="div" textAlign="center" gutterBottom>
                ENGLISH POKEMON
            </Typography>
            </Box>
            <Box sx={{flex:'1 1 100%', ml:5}}>
                <TextField inputRef={inputRef} fullWidth variant="outlined" type="search" placeholder="ex) 1" onChange={onInputChange} onKeyUp={onInput} />
            </Box>
            <Box sx={{flexShrink:0,alignSelf:'stretch', ml:1}}>
                <Button variant="contained" sx={{ height:'100%' }} onClick={onButtonClick}>search</Button>
            </Box> 
        </Container>
               
    )
};

export default SearchHeader;

// 검색어 유효성 검사하기
//https://github.com/jhyounyaho/FE_PokeAPI/blob/main/js/PocketmonManager.js