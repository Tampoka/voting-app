import React from 'react';
import s from './ProductsList.module.scss'
import {Product} from '../Product/Product';
import {products} from '../../assets/data/seed';

export const ProductsList = () => {
    const product = products[0];
    return (
        <div className={s.productsList}>
            <Product
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}/>
        </div>
    );
};

