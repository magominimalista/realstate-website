import React from 'react'
import './Header.css'

export const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="../logo.png" alt="logo" width={100} />

                <div className="flexCenter h-menu">
                    <a href="#">Residencies</a>
                    <a href="#">Our value</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Get started</a>
                    <button className="button">
                        <a href="#">Contact</a>
                    </button>
                </div>
            </div>
        </section>
    )
}
