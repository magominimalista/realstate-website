import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

export const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/* Left side */}
                <div className="flexColStart hero-left">

                    <div className="hero-title">
                        <div className="orange-circle"></div>
                        <h1>
                            Discover <br /> 
                            Most Suitable <br />
                            Property
                        </h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span>Find a variety of properties that suit you very easily</span>
                        <span>Forget all difficuties in finding residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type='text' />
                        <button className='button'>Search</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={88000} end={90000} duraction={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Premium Products
                            </span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1950} end={2000} duraction={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Happy Custumers
                            </span>
                        </div>

                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">
                                Awards Winnings
                            </span>
                        </div>

                    </div>


                </div>

                {/* Righ side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
