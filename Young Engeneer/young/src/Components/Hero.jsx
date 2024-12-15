import React, { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import "../styles/hero.css";
import Model from "./Model";
import { TextPlugin } from "gsap/TextPlugin";
import logo from "/logo.png";
import lock from "/lock-solid.svg";
import user from "/user-lock-solid.svg";




gsap.registerPlugin(TextPlugin);

export default function Hero() {
    useEffect(() => {
        gsap.to(".hero-name", {
            duration: 3,
            text: "Welcome to Young Engineers",
            delay: 1,
        })},[])
 


    return (
        <section className="hero" >
            <div className="navbar">
                <img src ={logo} height={50} className="logo" />
                <h1 className="hero-name"> </h1>
            </div>

            <div className='content'>
                
                <div className="modal-container">
                    <Model
                    />
                </div>
                <div className="Form">
                    <h1 className="form-title">Login</h1>
                   <div className="form-container">
                    <label className="label">Email:</label> <br />
                    <input type="text" placeholder="Email" className="input" />
                    <img src={user} height={20} className="icon" />
                   </div>
                   <div className="form-container">
                    <label className="label">Password:</label> 
                    <input type="password" placeholder="password" className="input" />
                    <img src={lock} height={20} className="icon" />
                   </div>
                    <button className="button">Submit</button>



                </div>
            </div>
        </section>
    );
}