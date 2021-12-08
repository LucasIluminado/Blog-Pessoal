import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function goLogout(){
        setToken('')
        alert('Usuário Deslogado!')
        history.push('/login')
    }
    return (
        <>
            <AppBar position="static" className='appbar'>
                <Toolbar variant="dense" >
                    <Box className='pointer' >
                        <Typography variant="h5" color="inherit">
                        <img src="https://i.imgur.com/ZAkdsnI.png" className="img" />
                        </Typography>
                    </Box>

                    <Box display="flex" className='cursor'>
                        <Link to= '/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        <Link to= '/posts' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            Postagens
                            </Typography>
                        </Box>
                        </Link>
                        <Link to= '/temas' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Link to= '/formularioTema' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                            Cadastro Temas
                            </Typography>
                        </Box>
                        </Link>
                        <Box mx={1} onClick={goLogout}>
                            <Typography className='pointer' variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                        

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;