import React from "react";
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Order Food App</h1>
                <HeaderCartButton onShowCart={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food"></img>
            </div>
        </React.Fragment>
    )
};

export default Header