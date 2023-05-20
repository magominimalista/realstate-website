import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

export const Value = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                {/* Left side */}
                <div className="v-lft">
                    <div className="image-container">
                        <img src="./value.png" alt="image" />
                    </div>
                </div>

                {/* Right side */}
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give to You</span>
                    <span>
                        We always read to help by providing the best service for
                        you.
                        <br />
                        We beleive a good place to live can your life better
                    </span>

                    <Accordion
                        className="accordion"
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {data.map((item, i) => {
                            const [className, setClassName] = useState(null)

                            return (
                                <AccordionItem
                                    className={`accordionItem ${className}`}
                                    key={i}
                                    uuid={i}
                                >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({ expanded }) =>
                                                    expanded
                                                        ? setClassName(
                                                              'expanded'
                                                          )
                                                        : setClassName(
                                                              'collapsed'
                                                          )
                                                }
                                            </AccordionItemState>

                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <div className="primaryText">
                                                {item.heading}
                                            </div>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown />
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
