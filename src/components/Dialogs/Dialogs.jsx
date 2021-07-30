import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Vitalii'},
        {id: 3, name: 'Nikita'},
        {id: 4, name: 'Yauhenii'},
        {id: 5, name: 'FE29'},
        {id: 6, name: 'MyLove'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are U'/>
                <Message message='Best wishes'/>
            </div>

        </div>
    )
}

export default Dialogs