import React from "react";
import AluraVercel from '../assets/AluraVercel.png';

function AluraPlus() {
    return (
        <li data-aos="fade-up">
            <a href="https://alura-plus-nu-six.vercel.app"><img className="ProjectImg" src={AluraVercel} alt="Alura Plus" /></a>
            <p>A project developed during my time at Alura, focado em uma boa prática em separação de seções.</p>
        </li>
    );
}

export default AluraPlus;