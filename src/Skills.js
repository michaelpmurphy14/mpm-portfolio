import React from 'react';

const Skill = ({ name, level }) => (
    <div className="skill mb-3">
        <span>{name}</span>
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

const Skills = () => {
    const skills = [
        { name: 'Design Thinking', level: 80 },
        // ... other skills
    ];

    return (
        <section id="skills" className="p-5 bg-light">
            <h2>Skills</h2>
            {skills.map((skill, index) => <Skill key={index} {...skill} />)}
        </section>
    );
};

export default Skills;
