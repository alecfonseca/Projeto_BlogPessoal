import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/action";
import { toast} from 'react-toastify';

    function Navbar() {
        const token = useSelector<TokenState, TokenState['tokens']>(
            (state) => state.tokens
          );
         let history = useHistory();
         const dispatch = useDispatch();

      function goLogout() {
        dispatch(addToken(''));
        toast.info('Usúario deslogado',{
            position:'top-right',
            autoClose:2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;
    if(token !=""){
        navbarComponent = <AppBar position="static" className="menu">
        <Toolbar variant="dense">
            <Box className="cursor" >
                <Typography variant="h5" color="inherit">
                    Blog Music
                </Typography>
            </Box>

            <Box display='flex' justifyContent='start'>

                <Link to='/home' className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Home
                        </Typography>
                    </Box>
                </Link>

                <Link to='/posts' className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Postagens
                        </Typography>
                    </Box>
                </Link>

                <Link to='/temas' className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography variant="h6" color="inherit">
                            Temas
                        </Typography>
                    </Box>
                </Link>

                <Link to='/formularioTema' className ="text-decorator-none">
                    <Box mx={1} className="cursor" >
                        <Typography variant="h6" color="inherit">
                            Cadastrar Temas
                        </Typography>
                    </Box>
                </Link>

                <Link to='/formularioPostagem' className ="text-decorator-none">
                    <Box mx={1} className="cursor" >
                        <Typography variant="h6" color="inherit">
                            Cadastrar Postagens
                        </Typography>
                    </Box>
                </Link>

                    <Box mx={1} className="cursor" onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
            </Box>
        </Toolbar>
    </AppBar>

    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;