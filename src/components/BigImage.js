import React from 'react';

const BigImage = () => {
    return (
       <div className="container intro-box">
           <img className="home-img" src="./images/home1.jpg" alt="Computer on desk"></img>
           <div className="introduction-box">
               <h1>Hi, I'm Marko Lekic and I love building beautiful web things</h1>
               <a className="btn about-btn" href="#btn">About Me</a>
           </div>
       </div>
    )
}

export default BigImage
