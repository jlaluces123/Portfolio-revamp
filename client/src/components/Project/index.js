import React from 'react';

// Component Imports
// import { Link } from 'react-router-dom';

const Project = (props) => {
    // console.log("props from Project\n", props);

    return (
        // Project Beginning
        <a href={props.project.link}>
            <div className='project'>
                {/* Image here */}
                <img
                    className='project__img'
                    src={props.project.image}
                    alt={props.project.description}
                />

                <div className='img__overlay'>
                    <h3>{props.project.title}</h3>
                    <p className='overlay__paragraph'>
                        {props.project.description}
                    </p>
                </div>
            </div>
        </a>
        // Project End
    );
};

export default Project;
