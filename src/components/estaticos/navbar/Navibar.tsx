import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import { color } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import './Navibar.css';

function Navibar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display='flex' justifyContent='start'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Cadastrar Temas
                            </Typography>
                        </Box>
                        
                        <Link to='/login' className='text-decoreted-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navibar;