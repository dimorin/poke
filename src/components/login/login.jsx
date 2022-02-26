import React, { useCallback, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = ({authService, onSetUserUid}) => {
    const navigate = useNavigate();
    const goToHome = useCallback((userUid) => {
        onSetUserUid(userUid);
        navigate('/home');
    }, [navigate, onSetUserUid])
    const onLogin = () => {
        authService.login().then(result => goToHome(result.user.uid));
    }
    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToHome(user.uid);
        })
    }, [authService, goToHome])
    return (
        <section style={{display:'flex', alignItems:'center',justifyContent:'center', width:'100%',height:'100vh'}}>
            <div>
                <h1 style={{textAlign:'center'}}>LOGIN</h1>
                <Button variant="contained" onClick={onLogin}>Google</Button>
            </div>            
        </section>
    )
};

export default Login;