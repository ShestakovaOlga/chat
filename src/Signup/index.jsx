import React, { useState, useGlobal } from 'reactn';
import { Button } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { sendSignup, Login, avatar } from '../server';
import { Selectimg } from '../Rightside/Selectimg';


function Signup(props) {
    const [fullname, setFullname] = useGlobal('fullname')
    const [mail, setMail] = useGlobal('mail')
    const [password, setPassword] = useGlobal('password')
    const [img, setImg] = useGlobal('img')
    const [mode] = useGlobal('mode')

    return <div style={{
        width: '50vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Muli', sans-serif",
        color: 'gray',
        ...['tablet', 'phone'].includes(mode) ? {
            width: '100%',
            height: 'none',
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
            }}>Sign up</div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <label htmlFor="">Full name</label>
                <input autoFocus onChange={(e) => { setFullname(e.target.value) }} style={{
                    margin: '15px 0',
                    padding: 10,
                    border: 0,
                    borderBottom: '1px solid gray',
                    outline: 'none',
                    backgroundColor: 'white',
                    fontFamily: "'Muli', sans-serif",
                    fontSize: '1rem'
                }}
                    type="username" value={fullname} />
                <label htmlFor="">Email address</label>
                <input onChange={(e) => { setMail(e.target.value) }} style={{
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
                <label htmlFor="">Create password</label>
                <input onChange={(e) => { setPassword(e.target.value) }} style={{
                    margin: '15px 0',
                    padding: 10,
                    border: 0,
                    borderBottom: '1px solid gray',
                    outline: 'none',
                    backgroundColor: 'white',
                    fontFamily: "'Muli', sans-serif",
                    fontSize: '1rem'
                }} type="password" name="" id="" value={password} />

                <Selectimg onChange={(i) => {
                    setImg(i)
                }} value={img} />

                <Button onClick={() => {
                    sendSignup(fullname, mail, password, img)
                    props.history.push('/')
                    setFullname('')
                    setMail('')
                    setPassword('')
                    avatar()
                }} style={{
                    padding: 6,
                    width: 200,
                    borderRadius: '40px',
                    backgroundColor: '#815ae6',
                    color: 'white',
                    border: 'none',
                    outline: 'none',
                    fontSize: '1rem',
                    margin: '20px 0 20px 200px',
                    fontFamily: "'Lexend Deca', sans-serif",
                    ...['tablet', 'phone'].includes(mode) ? {
                        width: 100,
                    } : {},
                }} variant="primary" type="submit">
                    Sign up
                </Button>
                <span>Already have an account?

                    <Link to='/' style={{
                        color: '#815ae6',
                        textDecoration: 'none',
                    }} >Long in</Link>

                </span>
            </div>

        </div>
    </div>
}
export default withRouter(Signup)