import React from "react";

function SkillsSec1() {
    return (
        <section className="SkillsSec1">
            <div className="SkillsContainer">
                <div className="SkillsTitle">
                    <h2 data-aos="fade-up">Skills</h2>
                </div>
                <div className="SkillsContent">
                    <ul>
                        <div>
                            <li data-aos="fade-up">Languages</li>
                            <p data-aos="fade-up">JavaScript (ES6)</p>
                            <p data-aos="fade-up">Python</p>
                            <p data-aos="fade-up">HTML5</p>
                            <p data-aos="fade-up">CSS3</p>
                        </div>
                        <div>
                            <li data-aos="fade-up">Frameworks</li>
                            <p data-aos="fade-up">React</p>
                            <p data-aos="fade-up">Node</p>
                            <p data-aos="fade-up">Express</p>
                        </div>
                        <div>
                            <li data-aos="fade-up">Tools</li>
                            <p data-aos="fade-up">Bash</p>
                            <p data-aos="fade-up">Git</p>
                            <p data-aos="fade-up">Github</p>
                            <p data-aos="fade-up">MongoDB</p>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default SkillsSec1;