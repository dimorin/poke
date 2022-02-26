import { useRef, useCallback, useEffect, memo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = memo(({authService, loves}) => {
    const navigate = useNavigate();
    const inputRef = useRef();     
    const onSearchPoke = useCallback((query) => {
        navigate('/searched',{state:{id:query}});
    }, [navigate]);
    const onInput = (event) => {        
        if(event.key === 'Enter'){
          onSearchPoke(inputRef.current.value);
        }
    };
    const onButtonClick = () => {
        onSearchPoke(inputRef.current.value);
    };
    const onLogout = () => {
        authService.logout();
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            !user && navigate('/'); // 로그아웃 되면 로그인 화면으로 이동
        })
    }, [authService, navigate])
    return (
        <header>
            <ul className={styles.menu_list}>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/interest" underline="none">
                        관심 포켓몬 
                        <Avatar sx={{display:'inline-flex', width: 24, height: 24, bgcolor: blue[700] }}>{Object.keys(loves).filter(key => loves[key]).length}</Avatar>
                    </Link>
                </li>
            </ul>
            
            <Box sx={{display:'flex',alignItems:'center'}}>                 
                <Box sx={{flex:'1 1 100%'}}>
                    <TextField inputRef={inputRef} fullWidth variant="outlined" type="search" placeholder="ex) 1"  onKeyUp={onInput} />
                </Box>
                <Box sx={{flexShrink:0,alignSelf:'stretch', ml:1}}>
                    <Button variant="contained" sx={{ height:'100%' }} onClick={onButtonClick}>search</Button>
                </Box> 
                <Box sx={{flexShrink:0,alignSelf:'stretch', ml:1}}>
                    <Button variant="contained" sx={{ height:'100%' }} onClick={onLogout}>Logout</Button>
                </Box>
            </Box>
        </header>
        
               
    )
});

export default Header;

// 검색어 유효성 검사하기
//https://github.com/jhyounyaho/FE_PokeAPI/blob/main/js/PocketmonManager.js