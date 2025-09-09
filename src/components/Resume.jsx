import React from "react";
import ResumeVercel from '../assets/CurriculoVercel.png';

function Resume () {
    return (
        <li data-aos="fade-up">
            <a href="https://curriculo-bay.vercel.app"><img className="ProjectImg" src={ResumeVercel} alt="My Resume" /></a>
            <p>Personal project developed to improve my skills in HTML, CSS, and JavaScript</p>
        </li>
    );
}

export default Resume;