import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(){
    return(
        <Grid container direction='row' justifyContent='center'alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant = 'h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto'>
                            Entrar
                        </Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='ususario' margin='normal' fullWidth />

                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decoreted-none'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' marginTop={2} justifyContent='center'>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta ?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='texto'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
            </Grid>
        </Grid>
    )
}

export default Login;