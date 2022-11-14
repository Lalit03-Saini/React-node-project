import "./style/hollywood.css";
import React, { useState } from 'react';

const Hollywood = () => {
    const [holly, setholly] = useState(false)

    return (
        <>
            <h2 className="hthetitle">Hollywood</h2>
            <hr className="line"></hr>
            <div className="hlatestmain">
                <div className="hbox">
                    <a href="./Hollywood/Hollywood1" style={{ textDecoration: "none", color: "black" }}>
                        <div className="hlatestblock"></div>
                        <div className="himagee"></div>
                        <div className="hdescrip">
                            <h3>Keanu Reeves donated 70% Matrix fees for cancer research</h3>
                            <p className="hdate">Actor Keanu Reeves has reportedly donated 70% of his earnings from The Matrix to cancer research in the US.</p>
                            <p className="hdate">Hollywood/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="hlatestline"></hr>
                    <a href="./Hollywood/Hollywood2" style={{ textDecoration: "none", color: "black" }}>
                        <div className="hlatestblock"></div>
                        <div className="himagee1"></div>
                        <div className="hdescrip">
                            <h3>Bob Saget tweeted about his '2-hours-long' show night before his death</h3>
                            <p className="hdate">Bob Saget was fonud dead in his hotal room in Florida. The comedian did a two-hour long show just a night before his death</p>
                            <p className="hdate">Hollywood/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="hhlatestline"></hr>
                    <a href="./Hollywood/Hollywood3" style={{ textDecoration: "none", color: "black" }}>
                        <div className="hlatestblock"></div>
                        <div className="himagee2"></div>
                        <div className="hdescrip">
                            <h3>Raising Titanic: The World of Communication & the Creation of One of the World's Most Succesful Films</h3>
                            <p className="hdate">Raising Titanic: The World of Communication & the Creation of One of the World's Most Succesful Films</p>
                            <p className="hdate">Hollywood/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="hlatestline"></hr>
                    <a href="./Hollywood/Hollywood4" style={{ textDecoration: "none", color: "black" }}>
                        <div className="hlatestblock"></div>
                        <div className="himagee3"></div>
                        <div className="hdescrip">
                            <h3>Living with Evil: Crime and Sexuality in Bonnie and Clyde and Chinatown</h3>
                            <p className="hdate">Through the late 1960s the French New Wave became a pronounced and significant factor in the creation and development of Hollywood films</p>
                            <p className="hdate">Hollywood/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="hhlatestline"></hr>
                    {holly && (
                        <a href="./Hollywood/Hollywood5" style={{ textDecoration: "none", color: "black" }}>
                            <div className="">
                                <div className="hlatestblock"></div>
                                <div className="himagee4"></div>
                                <div className="hdescrip">
                                    <h3>Iron Man: Avenger, Industrialist, Hero</h3>
                                    <p className="hdate">Without his suit of armor, Tony Stark has no supernatural powers. He is only limited by his imagination.</p>
                                    <p className="hdate">Hollywood/ Augest 21 2017</p>
                                </div>
                                <hr className="hlatestline"></hr>
                            </div>
                        </a>
                    )}
                </div>
                <button type="button" id="btn" className={holly ? "to" : "btn btn-primary"} onClick={() => setholly(true)}>Load More</button>
                <div className="hyside">
                    <h2>Top Post</h2>
                    <hr className="hstory"></hr>
                    <a href="./Hollywood/Hollywood6" style={{ textDecoration: "none", color: "black" }}>
                        <div className="htopstory">
                            <div className="hstoryimge"></div>
                            <div className="hstorydesc">
                                <h4>Black Panther: Wakanda Forever</h4>
                                <p>hollywood/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="hstoryline"></hr>
                    <a href="./Hollywood/Hollywood7" style={{ textDecoration: "none", color: "black" }}>
                        <div className="htopstory">
                            <div className="hstoryimge1"></div>
                            <div className="hstorydesc">
                                <h4>Avatar: The Way Of Water</h4>
                                <p>hollywood/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="hstoryline"></hr>
                    <a href="./Hollywood/Hollywood8" style={{ textDecoration: "none", color: "black" }}>
                        <div className="htopstory">
                            <div className="hstoryimge2"></div>
                            <div className="hstorydesc">
                                <h4>The Fabelmans</h4>
                                <p>hollywood/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="hstoryline"></hr>
                    <div className="hadvert"></div>
                </div>
            </div>
        </>
    )
}

export default Hollywood