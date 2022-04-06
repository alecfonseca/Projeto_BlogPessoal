import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/TokensReducer'


import { buscaId, post, put } from '../../../services/Sevice'
import Tema from '../../../models/Tema'

import "./CadastroTema.css"
import { toast } from 'react-toastify'

function CadastroTema() {

    let history = useHistory()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
      );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Usúario precisa estar logado !',{
                position:'top-right',
                autoClose:2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
                history.push("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        await buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value,
            postagem: [{}]
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        // Se o ID for diferente de indefinido tente Atualizar
        if (id !== undefined) {

            // TRY: Tenta executar a atualização 
            try {
                await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema atualizado com sucesso. !',{
                    position:'top-right',
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });

                // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                toast.error('Erro, por favor verifique a quantidade minima de caracteres. !',{
                    position:'top-right',
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                }); 
            }

            // Se o ID for indefinido, tente Cadastrar
        } else {

            // TRY: Tenta executar o cadastro
            try {
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema cadastrado com sucesso. !',{
                    position:'top-right',
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });

                // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch (error) {
                toast.error('Erro, por favor verifique a quantidade minima de caracteres. !',{
                    position:'top-right',
                    autoClose:2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: 'colored',
                    progress: undefined,
                });
            }
        }

        back()
    }

    function back() {
        history.push('/temas')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                    id="descricao"
                    label="descricao"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;