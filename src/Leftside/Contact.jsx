import React, { useState, useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";
import '../css/style'


export function Contact(props) {


    return <div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #F4F4F5',
            width: '100%'
        }}>

            {props.avatar ? <div style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
            }}>
                <img style={{ width: '100%', height: '100%' }} src={props.avatar} alt="" />
            </div> : <IoMdPerson style={{
                width: 50,
                height: 50,
                marginRight: 5,
                color: '#815ae6',
            }} />}

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}>
                <div style={{ flex: 3 }}>
                    <span style={{
                        marginRight: 20,

                    }}>{props.name}</span>
                    <span style={{
                        fontSize: '0.7rem',
                    }}>{props.date}</span>
                </div>
                <div style={{
                    color: '#BDC3C7',//gris claro
                    fontSize: '0.9rem',
                    marginTop: 5
                }}> Last message</div>
            </div>
            <input onChange={props.onChange} type="checkbox" checked={props.checked} />
        </div>
    </div>
}