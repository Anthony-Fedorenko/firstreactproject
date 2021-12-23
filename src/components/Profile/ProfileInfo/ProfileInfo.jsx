import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://highload.today/wp-content/uploads/2021/07/204718748_2961989494123364_6520009051359628154_n-889x500.jpg"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo