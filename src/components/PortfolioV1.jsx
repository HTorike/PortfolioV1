import React from "react";
import PortfolioV1Vercel from '../assets/Portfolio.png';

function PortfolioV1() {
    return (
        <li data-aos="fade-up">
            <a href="https://portfolio-v1-pi-bice.vercel.app"><img className="ProjectImg" src={PortfolioV1Vercel} alt="PortfolioV1" /></a>
            <p>This site! A simple personal project with basic animations for a better user experience. Focused on personal improvement with React and JavaScript and a simple layout using HTML and CSS.</p>
        </li>
    );
}

export default PortfolioV1;