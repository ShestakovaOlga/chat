import React, { useState, useEffect, useGlobal } from 'reactn';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { Checklogin } from '../server';
import { login } from '../server'


function Login(props) {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [logged] = useGlobal('logged')
    const [mode] = useGlobal('mode')
    useEffect(() => {
        Checklogin()
    }, [])
    useEffect(() => {
        if (logged) {
            props.history.push('/dashboard')
        }
    }, [logged])


    return <div style={{
        width: '50%',
        height: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Muli', sans-serif",
        color: 'gray',
        ...['tablet', 'phone'].includes(mode) ? {
            width: '100%',
        } : {},
    }}>

        <div style={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            ...['tablet', 'phone'].includes(mode) ? {
                width: '300px',
            } : {},
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Lexend Deca', sans-serif",
                fontSize: '2rem',
                color: 'black'
            }}>Log in</div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <label htmlFor="">Email adress</label>
                <input onChange={(e) => {
                    setMail(e.target.value)
                }} style={{
                    margin: '15px 0',
                    padding: 10,
                    border: 0,
                    borderBottom: '1px solid gray',
                    outline: 'none',
                    backgroundColor: 'white',
                    fontFamily: "'Muli', sans-serif",
                    fontSize: '1rem'
                }}
                    type="email" value={mail} />
                <label htmlFor="">Password</label>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} style={{
                    margin: '15px 0',
                    padding: 10,
                    border: 0,
                    borderBottom: '1px solid gray',
                    outline: 'none',
                    backgroundColor: 'white',
                    fontFamily: "'Muli', sans-serif",
                    fontSize: '1rem'
                }} type="password" value={password} />
                <InputGroup.Prepend>
                    <label htmlFor="">
                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                        Keep me logged in
                    </label>
                </InputGroup.Prepend>
                <Button onClick={() => {
                    login(mail, password)
                }} style={{
                    padding: 6,
                    width: 200,
                    borderRadius: '40px',
                    border: 'none',
                    backgroundColor: '#815ae6 ',
                    color: 'white',
                    outline: 'none',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    margin: '20px 0 20px 200px',
                    fontFamily: "'Lexend Deca', sans-serif",
                    ...['tablet', 'phone'].includes(mode) ? {
                        width: 100,
                    } : {},
                }} variant="primary" type="submit">
                    Log in
                </Button>
                <span>Don`t have an account?

                        <Link to='/signup' style={{
                        color: '#815ae6',
                        textDecoration: 'none',
                    }} >Sign up</Link>

                </span>
            </div>

        </div>
    </div>
}
export default withRouter(Login)
