import React from 'react';
import Styles from "./SkillCard.module.scss"
import Image from 'next/image';
import Icon from '../../Layout/Icons';

const SkillCard = ({props}) =>{
    return (
        <div className={Styles.skillcard}>
            <span className={Styles.icon}>
            <Icon icon={props?.icon} size={50} />
            </span>
            <h3 className={Styles.title}>{props?.title}</h3>
            <p>{props?.description}</p>

        </div>
    );
}

export default SkillCard;