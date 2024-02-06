import React from 'react';

const Project = ({ title, context, problem, approach, output, outcomes, images }) => {
    return (
        <div className="project mb-5">
            <h3 className="project-title">{title}</h3>
            <p className="project-context">{context}</p>
            <div className="project-problem">
                <h4>Problem</h4>
                <p>People: {problem.people}</p>
                <p>Processes: {problem.processes}</p>
                <p>Tools: {problem.tools}</p>
            </div>
            <div className="project-approach">
                <h4>Approach</h4>
                <p>Methodologies: {approach.methodologies}</p>
                <p>Tools: {approach.tools}</p>
            </div>
            <div className="project-output">
                <h4>Output</h4>
                <p>{output}</p>
            </div>
            <div className="project-outcomes">
                <h4>Outcomes</h4>
                <p>{outcomes}</p>
            </div>
            <div className="project-images">
                {images && images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} className="img-fluid" />
                ))}
            </div>
        </div>
    );
};

export default Project;
