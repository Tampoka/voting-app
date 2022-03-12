import React from 'react';
import s from './Product.module.scss';
import aqua from '../../assets/images/products/image-aqua.png'
import daniel from '../../assets/images/avatars/daniel.jpg';

export const Product = () => {
    return (
        <div className={s.item}>
            <div className={s.image}>
                <img src={aqua} alt=""/>
            </div>
            <div className={s.itemContent}>
                <div className={s.description}>
                    <a href="#"> Fort Knight</a>
                    <p>Authentic renaissance actors, delivered in just two weeks.</p>
                </div>
                <div className={s.extra}>
                    <span>Submitted by:</span>
                    <img className={s.avatarImg} src={daniel} alt="userAvatar"/>
                </div>
            </div>
        </div>
    );
};

