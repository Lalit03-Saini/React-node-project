import "./style/technology.css";
import React, { useState } from 'react';

const Technology = () => {
    const [holly, setholly] = useState(false)

    return (
        <>
            <h2 className="ththetitle">Technology</h2>
            <hr className="tline"></hr>
            <div className="tlatestmain">
                <div className="tbox">
                    <a href="./Technology/Technology1" style={{ textDecoration: "none", color: "black" }}>
                        <div className="tlatestblock"></div>
                        <div className="timagee"></div>
                        <div className="tdescrip">
                            <h3>Special and Hazardous Waste Management</h3>
                            <p className="tdate">Special and Hazardous Waste Management is a service which deals in the collection, transportation, and treatment of hazardous waste.</p>
                            <p className="tdate">Technology/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="tlatestline"></hr>
                    <a href="/Technology/Technology2" style={{ textDecoration: "none", color: "black" }}>
                        <div className="tlatestblock"></div>
                        <div className="timagee1"></div>
                        <div className="tdescrip">
                            <h3>Clean energy technologies</h3>
                            <p className="tdate">Bidhaa Sasa’s product range is defined by their clients’ feedback and includes cooking, lighting and agricultural solutions.</p>
                            <p className="tdate">Technology/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="tlatestline"></hr>
                    <a href="/Technology/Technology3" style={{ textDecoration: "none", color: "black" }}>
                        <div className="tlatestblock"></div>
                        <div className="timagee2"></div>
                        <div className="tdescrip">
                            <h3>MellowVans</h3>
                            <p className="tdate">MellowVans provide delivery services in an efficient, low cost, and emission-free way.</p>
                            <p className="tdate">Technology/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="ttlatestline"></hr>
                    <a href="/Technology/Technology4" style={{ textDecoration: "none", color: "black" }}>
                        <div className="tlatestblock"></div>
                        <div className="timagee3"></div>
                        <div className="tdescrip">
                            <h3>Adjustable Prosthetic Pylon</h3>
                            <p className="tdate">The Adjustable Prosthetic Pylon delivers results on par with expensive composites at a fraction of the cost.</p>
                            <p className="tdate">Technology/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="tlatestline"></hr>
                    {holly && (
                        <a href="/Technology/Technology5" style={{ textDecoration: "none", color: "black" }}>
                            <div className="">
                                <div className="tlatestblock"></div>
                                <div className="timagee4"></div>
                                <div className="tdescrip">
                                    <h3>Ecological Sanitation Systems in Peru</h3>
                                    <p className="tdate">ECOLOGICAL SANITATION SYSTEMS IN PERU provides portable and ecological toilet solutions that don’t require water or chemicals.</p>
                                    <p className="tdate">Technology/ Augest 21 2017</p>
                                </div>
                                <hr className="tlatestline"></hr>
                            </div>
                        </a>
                    )}
                </div>
                <button type="button" id="btn" className={holly ? "to" : "btn btn-primary"} onClick={() => setholly(true)}>Load More</button>
                <div className="tyside">
                    <h2>Top Post</h2>
                    <hr className="tstory"></hr>
                    <a href="/Technology/Technology6" style={{ textDecoration: "none", color: "black" }}>
                        <div className="ttopstory">
                            <div className="tstoryimge"></div>
                            <div className="tstorydesc">
                                <h4>Energy Saving Cookstove</h4>
                                <p>Technology/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="tstoryline"></hr>
                    <a href="/Technology/Technology7" style={{ textDecoration: "none", color: "black" }}>
                        <div className="ttopstory">
                            <div className="tstoryimge1"></div>
                            <div className="tstorydesc">
                                <h4>Solar Scheffler Reflectors</h4>
                                <p>Technology/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="tstoryline"></hr>
                    <a href="/Technology/Technology8" style={{ textDecoration: "none", color: "black" }}>
                        <div className="ttopstory">
                            <div className="tstoryimge2"></div>
                            <div className="tstorydesc">
                                <h4>Seawater Greenhouse</h4>
                                <p>Technology/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="tstoryline"></hr>
                    <div className="tadvert"></div>
                </div>
            </div>
        </>
    )
}

export default Technology;