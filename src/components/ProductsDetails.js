import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductsDetails = () => {
    const shoes = {
        "Originals":{
            name:"ZX 2K 4D",
            img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0dff05dd3dcd4e8d84dcab41011aa40b_9366/ZX_2K_4D_Shoes_Yellow_FV9028_01_standard.jpg"
        },
        "Running":{
            name:"ULTRABOOST 20",
            img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/0c26cdcb7aee465bb0f7ab44011bc420_9366/Ultraboost_20_Shoes_White_EG0712_01_standard.jpg"
            },
        "Men's Originals":{
            name:"TOP TEN RB",
            img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/aadfa1542b6a446180d0aba6005e54ce_9366/Top_Ten_RB_Shoes_Blue_FV4926_01_standard.jpg"
            },
        "Men's BasketBall":{
            name:"HARDEN VOL 4",
            img:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7ef2555159d04cd3a74eaaf7014de5a6_9366/Harden_Vol._4_Shoes_Black_EF9924_01_standard.jpg"
            }
    }

    const {productId} = useParams();
    const product = shoes[productId];
    const {name, img} = product;
    return (
        <div>
            <h3>{name}</h3>
            <img src={img} alt={name}/>
        </div>
    )
}
