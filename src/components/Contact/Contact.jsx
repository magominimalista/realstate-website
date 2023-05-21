import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill, BsCameraVideoFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

export const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* Left side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contats</span>
                    <span className="primaryText">Easy to Contact us</span>
                    <span className="secondaryText">
                        We always read to help by providing the best service for
                        you.
                        <br />
                        We beleive a good place to live can your life better
                    </span>

                    <div className="flexColStart contactModes">
                        {/* Primary row */}
                        <div className="flexStart row">
                            {/* Primary mode */}
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                Call
                                            </span>
                                            <span className="secondaryText">
                                                021 123 145
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Call Naw
                                    </div>
                                </div>
                            </div>

                            {/* Secondary mode */}
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                Chat
                                            </span>
                                            <span className="secondaryText">
                                                021 123 145
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Chat Naw
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary row */}
                        <div className="flexStart row">
                            {/* Primary mode */}
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsCameraVideoFill size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                VideoCall
                                            </span>
                                            <span className="secondaryText">
                                                021 123 145
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Video Call Naw
                                    </div>
                                </div>
                            </div>

                            {/* Secondary mode */}
                            <div className="flexColCenter mode">
                                <div className="flexColStart">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter
                                                size={25}
                                            />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">
                                                Message
                                            </span>
                                            <span className="secondaryText">
                                                021 123 145
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">
                                        Message Naw
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
