import "./style/fitness.css";
import React, { useState } from 'react';

const Fitness = () => {
    const [holly, setholly] = useState(false)

    const btn = () => {
        holly ? setholly(false) : setholly(true)
    }
    return (
        <>
            <h2 className="hthetitle">Fitness</h2>
            <hr className="line"></hr>
            <div className="flatestmain">
                <div className="fbox">
                    <a href="./Fitness/Fitness1" style={{ textDecoration: "none", color: "black" }}>
                        <div className="flatestblock"></div>
                        <div className="fimagee"></div>
                        <div className="fdescrip">
                            <h3>10-Minute Pregnancy Strength Workout With Kelsey Wells</h3>
                            <p className="fdate">If cleared by your doctor, exercise during pregnancy can help you and your baby. Try this short resistance workout to boost</p>
                            <p className="fdate">Fitness/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="flatestline"></hr>
                    <a href="./Fitness/Fitness2" style={{ textDecoration: "none", color: "black" }}>
                        <div className="flatestblock"></div>
                        <div className="fimagee1"></div>
                        <div className="fdescrip">
                            <h3>Dance Workouts: What Counts, Health Benefits, How to Get Started, and How to Get Better</h3>
                            <p className="fdate">Zumba, hip-hop, salsa, and ballet can all make for a great workout. Choose a style you love and you'll barely notice</p>
                            <p className="fdate">Fitness/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="flatestline"></hr>
                    <a href="./Fitness/Fitness3" style={{ textDecoration: "none", color: "black" }}>
                        <div className="flatestblock"></div>
                        <div className="fimagee2"></div>
                        <div className="fdescrip">
                            <h3>The Best Exercises for Stronger Abs and a Stronger Core</h3>
                            <p className="fdate">Strong abdominal muscles are about way more than a toned-looking stomach. The ab and core muscles help with</p>
                            <p className="fdate">Fitness/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="flatestline"></hr>
                    <a href="./Fitness/Fitness4" style={{ textDecoration: "none", color: "black" }}>
                        <div className="flatestblock"></div>
                        <div className="fimagee3"></div>
                        <div className="fdescrip">
                            <h3>The Best At-Home Exercises for a Stronger Back</h3>
                            <p className="fdate">Strong back muscles can help lessen back pain, increase mobility, and help you stand taller. Add this at-home back</p>
                            <p className="fdate">Fitness/ Augest 21 2017</p>
                        </div>
                    </a>
                    <hr className="flatestline"></hr>
                    {holly && (
                        <a href="./Fitness/Fitness5" style={{ textDecoration: "none", color: "black" }}>
                            <div className="">
                                <div className="flatestblock"></div>
                                <div className="fimagee4"></div>
                                <div className="fdescrip">
                                    <h3>How to Get Started With Dance Workouts: An Absolute Beginner’s Guide</h3>
                                    <p className="fdate">Pick a style of dance (and music) that resonates with you and it won’t even feel like a workout. Here’s more on what</p>
                                    <p className="fdate">Fitness/ Augest 21 2017</p>
                                </div>
                                <hr className="flatestline"></hr>
                            </div>
                        </a>
                    )}
                </div>
                <button type="button" id="btn" className={holly ? "to" : "btn btn-primary"} onClick={() => setholly(true)}>Load More</button>
                <div className="fyside">
                    <h2>Top Post</h2>
                    <hr className="fstory"></hr>
                    <a href="./Fitness/Fitness6" style={{ textDecoration: "none", color: "black" }}>
                        <div className="ftopstory">
                            <div className="fstoryimge"></div>
                            <div className="fstorydesc">
                                <h4>9 Dance Workouts to Try at Home or Stream From Anywhere</h4>
                                <p>Fitness/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="fstoryline"></hr>
                    <a href="./Fitness/Fitness7" style={{ textDecoration: "none", color: "black" }}>
                        <div className="ftopstory">
                            <div className="fstoryimge1"></div>
                            <div className="fstorydesc">
                                <h4>5 Reasons Walking Is Good for Your Health</h4>
                                <p>Fitness/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="fstoryline"></hr>
                    <a href="./Fitness/Fitness8" style={{ textDecoration: "none", color: "black" }}>
                        <div className="ftopstory">
                            <div className="fstoryimge2"></div>
                            <div className="fstorydesc">
                                <h4>Cycling: Health Benefits, How to Get Started, and How to Get Better</h4>
                                <p>Fitness/Augest 21 2022</p>
                            </div>
                        </div>
                    </a>
                    <hr className="fstoryline"></hr>
                    <div className="fadvert"></div>
                </div>
            </div>
        </>
    )
}

export default Fitness