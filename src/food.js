import "./style/food.css"
import React, { useState } from 'react';

const Food = () => {
    const [food, setfood] = useState(false)

    const btn = () => {
        food ? setfood(false) : setfood(true)
    }
    return (
        <>
            <h2 className="fothetitle">Food</h2>
            <hr className="foline"></hr>
            <div className="folatestmain">
                <div className="fobox">
                    <a href="./Food/Food1" style={{ textDecoration: "none", color: "black" }}>
                        <div className="folatestblock"></div>
                        <div className="foimage"></div>
                        <div className="fodescrip">
                            <h3>You must have gajar-mooli ka achar in winters and its health benefits</h3>
                            <p className="fodate">Pickles are one of the best side dishes that can increase the flavour of any meal, pickle can intantly make it flavourful.</p>
                            <p className="fodete">Food/ Augest 21/2022</p>
                        </div>
                    </a>
                    <hr className="folatestline"></hr>
                    <a href="./Food/Food2" style={{ textDecoration: "none", color: "black" }}>
                        <div className="folatestblock"></div>
                        <div className="foimage1"></div>
                        <div className="fodescrip">
                            <h3>unique Broccoil Amla Halwa can boost immunity and lower heart attack risk </h3>
                            <p className="fodate">This unique Broccoil Amla Halwa can boost immunity and lower heart attack risk</p>
                            <p className="fodete">Food/ Augest 21/2022</p>
                        </div>
                    </a>
                    <hr className="folatestline1"></hr>
                    <a href="./Food/Food3" style={{ textDecoration: "none", color: "black" }}>
                        <div className="folatestblock"></div>
                        <div className="foimage2"></div>
                        <div className="fodescrip">
                            <h3>Is it safe to eat eggs during periods ?</h3>``
                            <p className="fodate">Eggs during periods: To eat or not?</p>
                            <p className="fodete">Food/ Augest 21/2022</p>
                        </div>
                    </a>
                    <hr className="folatestline2"></hr>
                    <a href="./Food/Food4" style={{ textDecoration: "none", color: "black" }}>
                        <div className="folatestblock"></div>
                        <div className="foimage3"></div>
                        <div className="fodescrip">
                            <h3>Is health food for kids and adults same ?</h3>
                            <p className="fodate">Are kids eating the same healthy food  as adults?</p>
                            <p className="fodete">Food/ Augest 21/2022</p>
                        </div>
                    </a>
                    <hr className="folatestline3"></hr>
                    {food && (
                        <a href="./Food/Food5" style={{ textDecoration: "none", color: "black" }}>
                            <div className="">
                                <div className="folatestblock"></div>
                                <div className="foimage4"></div>
                                <div className="fodescrip">
                                    <h3>you can make the original garam masala at home</h3>
                                    <p className="fodate">This original garam masala recipe can  make any dish delicious</p>
                                    <p className="fodate">Fitness/ Augest 21 2017</p>
                                </div>
                                <hr className="folatestline4"></hr>
                            </div>
                        </a>
                    )}
                </div>
                <button type="button" id="btn" className={food ? "to" : "btn btn-primary"} onClick={() => setfood(true)}>Load More</button>
                <div className="foyside">
                    <h2>Top Post</h2>
                    <hr className="fostory"></hr>
                    <a href="./Food/Food6" style={{ textDecoration: "none", color: "black" }}>
                        <div className="fotopstory">
                            <div className="fostoryimge"></div>
                            <div className="fostorydesc">
                                <h4>Foods you must never pair with milk</h4>
                                <p>Food/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="fostoryline"></hr>
                    <a href="./Food/Food7" style={{ textDecoration: "none", color: "black" }}>
                        <div className="fotopstory">
                            <div className="fostoryimge1"></div>
                            <div className="fostorydesc">
                                <h4>These dilicious immunity-boosting korean teas</h4>
                                <p>Food/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="fostoryline"></hr>
                    <a href="./Food/Food8" style={{ textDecoration: "none", color: "black" }}>
                        <div className="fotopstory">
                            <div className="fostoryimge2"></div>
                            <div className="fostorydesc">
                                <h4>foods to eats to balance the extra salt intake</h4>
                                <p>Food/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="fostoryline"></hr>
                    <div className="foadvert"></div>
                </div>
            </div>
        </>
    )
}

export default Food