import React, { useState } from 'react';
import "./style/bollywood.css"

const Bollywood = () => {
    const [bolly, setbolly] = useState(false);
    return (
        <>
            <h2 className='heading'>Bollywood</h2>
            <hr className='btline'></hr>
            <div className='blatestmain'>
                <div className='bbox'>
                    <a href='./Bollywood/Bollywood1' style={{ textDecoration: "none", color: "black" }}>
                        <div className='blatestblock'>
                            <div className='bimagee'></div>
                            <div className='bdescrip1'>
                                <h2>Ranveer joins the  cast of international fantasty series</h2>
                                <p>"Ranveer has finally announced his foray into OTT space as a knight with Amazon Prime fantasy series, The wheel of Time"</p>
                                <p>Bollywood/Augest 21 2017</p>
                            </div>
                            <hr className='blatestline'></hr>
                        </div>
                    </a>
                    <a href='./Bollywood/Bollywood2' style={{ textDecoration: "none", color: "black" }}>
                        <div className='blatestblock'>
                            <div className='bimagee1'></div>
                            <div className='bdescrip1'>
                                <h2>Vikram first look has hrithik on wrong side of law, Madhavan calls it 'epic'</h2>
                                <p>On hrithik Roshan's Birthday,Vikram Vedha makers released the actor's first look from the film.The film stars Saif Ali Khan as Vikram</p>
                                <p>Bollywood/Augest 21 2017</p>
                            </div>
                            <hr className='blatestline'></hr>
                        </div>
                    </a>
                    <a href='./Bollywood/Bollywood3' style={{ textDecoration: "none", color: "black" }}>
                        <div className='blatestblock'>
                            <div className='bimagee2'></div>
                            <div className='bdescrip1'>
                                <h2>Salman Khan's 'Bajrangi Bhaijaan' sequel</h2>
                                <p>Kabir Khan confirms Salman Khan's 'Bajrangi Bhaijaan'sequel,says he will helm it on one condition</p>
                                <p>Bollywood/Augest 21 2017</p>
                            </div>
                            <hr className='blatestline1'></hr>
                        </div>
                    </a>
                    <a href='./Bollywood/Bollywood4' style={{ textDecoration: 'none', color: "black" }}>
                        <div className='blatestblock'>
                            <div className='bimagee3'></div>
                            <div className='bdescrip1'>
                                <h2>Priyanka Chopra Flaunts her nre hairstyle to Ariana Granda song New Hair.</h2>
                                <p>On Monday, actor Priyanka Chopra reveled her new hairstyle on her Instagram Stories</p>
                                <p>Bollywood/Augest 21 2017</p>
                            </div>
                            <hr className='blatestline1'></hr>
                        </div>
                    </a>
                    {bolly && (
                        <a href='./Bollywood/Bollywood5' style={{ textDecoration: "none", color: "black" }}>
                            <div className=''>
                                <div className='blatestblock'>
                                    <div className='bimagee4'></div>
                                    <div className='bdescrip1'>
                                        <h2>Kirti Kulhari launches her production house Kintsukuroi Films</h2>
                                        <p>Lirti Kulhari launches her production house Kintsukuroi Films, announced first movies Nayeka under new banner</p>
                                        <p>Bollywood/Augest 21 2017</p>
                                    </div>
                                </div>
                                <hr className='blatestline1'></hr>
                            </div>
                        </a>
                    )}
                    <button type="button" id="button" className={bolly ? "to" : "btn btn-primary"} onClick={() => setbolly(true)}>Load More</button>
                </div>
                <div className='byside'>
                    <h2>Top post</h2>
                    <hr className='btline1'></hr>
                    <a href='./Bollywood/Bollywood6' style={{ textDecoration: "none", color: "black" }}>
                        <div className='btopstory'>
                            <div className='bstoryimage'></div>
                            <div className='bstorydesc'>
                                <h4>Allu Arjun Pushpa has an excellent third weekend</h4>
                                <p>Bollywood/ Augest 21 2017</p>
                            </div>
                        </div>
                    </a>
                    <hr className='bstroyline'></hr>
                    <a href='/Bollywood/Bollywood7' style={{ textDecoration: "none", color: "black" }}>
                        <div className='btopstory'>
                            <div className='bstoryimage1'></div>
                            <div className='bstorydesc'>
                                <h4>Salman to start shooting for Chiranjeevi's telugu film</h4>
                                <p>Bollywood/ Augest 21 2017</p>
                            </div>
                        </div>
                    </a>
                    <hr className='bstroyline'></hr>
                    <a href='/Bollywood/bollywood8' style={{ textDecoration: "none", color: "black" }}>
                        <div className='btopstory'>
                            <div className='bstoryimage2'></div>
                            <div className='bstorydesc'>
                                <h4>Alia Bhatt's fees For Gangubai Kathaiawadi Will Drop Your Jaws</h4>
                                <p>Bollywood/ Augest 21 2017</p>
                            </div>
                        </div>
                    </a>
                    <hr className='bstroyline'></hr>
                </div>
                <div className='badvert'></div>
            </div>
        </>
    )
}

export default Bollywood;