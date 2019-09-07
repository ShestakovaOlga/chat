import React, { useState, useEffect, useGlobal } from 'reactn';
import { IoMdPerson } from "react-icons/io";


export function Contact(props) {


    return <div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #F4F4F5',
        }}>
            <IoMdPerson style={{
                width: 30,
                height: 30,
                marginRight: 5,
                color: '#815ae6',
            }} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
            }}>

                <div>
                    <span style={{
                        marginRight: 20
                    }}>{props.name}</span>
                    <span style={{
                        fontSize: '0.7rem',
                        flexGrow: 1
                    }}>{props.date}</span>
                </div>
                <div style={{
                    color: '#BDC3C7',//gris claro
                    fontSize: '0.9rem',
                    marginTop: 5
                }}> Last message</div>
            </div>
            <input onChange={props.onChange} type="checkbox" name="" id="" checked={props.checked} />
        </div>
    </div>
}