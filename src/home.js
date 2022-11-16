import "./style/home.css";
import React, { useState } from "react";
import Slider from "./slider"

const Home = () => {
    const [toggle, settoggle] = useState(false);
    const [show, setshow] = useState(false);

    return (
        <>
            <div className="gallery">
                <div className="gallerymain" >
                    <a href="./home/home1">
                        <div className="sideone">
                            <div className="qoute">
                                <h3>Title of vertical gallery</h3>
                                <p>Travel/August 21 2017</p>
                            </div>
                        </div>
                    </a>
                    <div className="sidetwo">
                        <div className="">
                            <a href="./home/home2" style={{ textDecoration: "none" }}>
                                <div className="top">
                                    <div className="qoutetop">
                                        <h3>The sound cloud you loved</h3>
                                        <p>Travel/August 21 2017</p>
                                    </div>
                                </div>
                            </a>
                            <a href="./home/home3" style={{ textDecoration: "none" }}>
                                <div className="bottom">
                                    <div className="qoutebottom">
                                        <h3>Nature Cloud is doomed</h3>
                                        <p>Travel/August 21 2017</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                < Slider />
                <div className="thetitle">The Post</div>
                <hr className="line"></hr>
                <div className="lastbox">
                    <a href="./Home/Home4" style={{ textDecoration: "none", color: "black" }}>
                        <div className="article">
                            <div className="image"></div>
                            <div className="desc">
                                <h2>The Beatles: Get Back director Peter Jackson on turning the boy band's breakup saga into a 'human story'</h2>
                                <p className="date">The Beatles: Get Back director Peter Jackson on turning the boy band's breakup saga into a 'human story'</p>
                                <p className="date">Hollywood/ August 21 2021</p>
                            </div>
                        </div>
                    </a>
                    <a href="./Home/Home5" style={{ textDecoration: "none", color: "black" }}>
                        <div className="article">
                            <div className="image1"></div>
                            <div className="desc">
                                <h2>" Motorola Edge X30 to hit global markets as Edge 30 Pro - GSMArena.com news - GSMArena.com"</h2>
                                <p className="date">A source familiar with the matter said Google paid about $500 million (roughly Rs. 3,730 crore) in cash for Siemplify.'</p>
                                <p className="date">Technology/ August 21 2017</p>
                            </div>
                        </div>
                    </a>
                    <a href="./Home/Home6" style={{ textDecoration: "none", color: "black" }}>
                        <div className="article">
                            <div className="image2"></div>
                            <div className="desc">
                                <h2>Foods to eat to balance the extra salt intake</h2>
                                <p className="date">Foods to eat when you have eaten too much salt, Have you ever imagined what happens when you have too much salt in your body?'</p>
                                <p className="date">Food/ August 21 2017</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="thetitle">The Latest</div>
                <hr className="line"></hr>
                <div className="lastmain">
                    <div className="box">
                        <a href="./Home/Home7" style={{ textDecoration: "none", color: "black" }}>
                            <div className="lastblock">
                                <div className="lastimg"></div>
                                <div className="descrip">
                                    <h3>Catch wavas with an adventures guide</h3>
                                    <p className="date">A beach is a landform alongside a body of water which consists of loose particles.</p>
                                    <p className="date">adventures/ August 21 2017</p>
                                </div>
                                <hr className="latestline"></hr>
                            </div>
                        </a>
                        <a href="./Home/Home8" style={{ textDecoration: "none", color: "black" }}>
                            <div className="lastblock">
                                <div className="lastimg1"></div>
                                <div className="descrip">
                                    <h3>WhatsApp to revamp iOS chat design in future update</h3>
                                    <p className="date">WhatsApp to remove Boardcast List and New Group rows from chat list on iOS; new access point.</p>
                                    <p className="date">Technology/ August 21 2017</p>
                                </div>
                                <hr className="latestline"></hr>
                            </div>
                        </a>
                        <a href="/Home/Home9" style={{ textDecoration: "none", color: "black" }}>
                            <div className="lastblock">
                                <div className="lastimg2"></div>
                                <div className="descrip2">
                                    <h3>Six exercise at-home fitness challenge to help you reach your goals</h3>
                                    <p className="date">If you wish to tighten up your glutes, an extended squat challenge is an outstanding approach to build muscle and reduce fat.</p>
                                    <p className="date">fitness/ August 21 2017</p>
                                </div>
                                <hr className="latestline"></hr>
                                <div className="adv"></div>
                            </div>
                        </a>
                        {toggle && (
                            <div className="">
                                <a href="/Home/Home10" style={{ textDecoration: "none", color: "black" }}>
                                    <div className="lastblock">
                                        <div className="lastimg3"></div>
                                        <div className="descrip">
                                            <h3>Vikarm first look has Hrithik on wrong side of low, Madhavan calls it 'epic'</h3>
                                            <p className="date">On Hrithik Roshan's birthday, Vikarm Vedha makers relased the actor's first look from the film. The film start Saif Ali Khan as Vikarm</p>
                                            <p className="date">Bollywood/ August 21 2017</p>
                                        </div>
                                        <hr className="latestline"></hr>
                                    </div>
                                </a>
                                <a href="/Home/Home11" style={{ textDecoration: "none", color: "black" }}>
                                    <div className="lastblock">
                                        <div className="lastimg4"></div>
                                        <div className="descrip">
                                            <h3>Have you tried these delicious immunity-boosting Korean teas?</h3>
                                            <p className="date">Have you tried these delicious immunity-boosting Korean teas?</p>
                                            <p className="date">Health/ August 21 2017</p>
                                        </div>
                                        <hr className="latestline"></hr>
                                    </div>
                                </a>
                            </div>
                        )}
                        <button type="button" id="button" className={toggle ? "tog" : "btn btn-primary"} onClick={() => settoggle(true)}>Load More</button>
                    </div>
                </div>
                <div className="thetitle">Latest Stories</div>
                <hr className="line"></hr>
                <div className="storymain">
                    <div className="storybox">
                        <h3>iOS Devices Freeze Due to a HomeKit</h3>
                        <p>iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher.</p>
                        <p>Technology/Augest 21 2017</p>
                        <hr className="storyline"></hr>
                    </div>
                    <div className="storybox">
                        <h3>iOS Devices Freeze Due to a HomeKit</h3>
                        <p>iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher.</p>
                        <p>Technology/Augest 21 2017</p>
                        <hr className="storyline"></hr>
                    </div>
                    <div className="storybox">
                        <h3>iOS Devices Freeze Due to a HomeKit</h3>
                        <p>iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher.</p>
                        <p>Technology/Augest 21 2017</p>
                        <hr className="storyline"></hr>
                    </div>
                    {(
                        show &&
                        <div className="storybox">
                            <h3>iOS Devices Freeze Due to a HomeKit</h3>
                            <p>iOS- based devices could go into a cycle of freezing and crashing and become unusable due to a HomeKit vulnerability that has been exposed by a security researcher.</p>
                            <p>Technology/Augest 21 2017</p>
                            <hr className="storyline"></hr>
                        </div>
                    )}
                    <div className="">
                        <button type="button" id="button1" className={show ? "btt" : "btn btn-primary"} onClick={() => setshow(true)}>Load More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
