import React from 'react'
import s from "./Message.module.css"

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.avatar} alt=""/>

            <div className={s.angela}/>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
