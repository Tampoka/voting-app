import React from 'react';
import s from './Product.module.scss';

export const Product = (props) => {
    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src={props.productImageUrl} alt=""/>
            </div>
            <div className={s.itemContent}>
                <div className={s.description}>
                    <a href={props.url}>{props.title}</a>
                    <p>{props.description}</p>
                </div>
                <div className={s.extra}>
                    <span>Submitted by:</span>
                    <img className={s.avatarImg} src={props.submitterAvatarUrl} alt="userAvatar"/>
                </div>
            </div>
        </div>
    );
};

