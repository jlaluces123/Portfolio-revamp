import React from 'react';
import './home.css';

// Component Imports
// import { Link } from "react-router-dom";
import Projects from '../Projects/index.js';
import { projectArr } from '../Data/index.js';

// Assets
import ProfileWebP from '../../assets/cropped_smiling.webp';
import Profile from '../../assets/cropped_smiling.jpeg';

class Home extends React.Component {
    state = {
        projects: [],
    };

    componentDidMount() {
        this.setState({ projects: projectArr });
    }

    componentDidUpdate() {
        // console.log("update occurred");
        // console.log(this.state.projects);
    }

    render() {
        return (
            <div className='home'>
                {/* Intro section */}
                <div className='intro'>
                    <picture>
                        <source srcSet={ProfileWebP} type='image/webp' />
                        <img
                            className='intro__pic'
                            src={Profile}
                            alt='smiling version of me'
                        />
                    </picture>
                    <div className='intro__text'>
                        <h4 className='intro__title'>
                            Software Engineer & Cellist
                        </h4>
                        <h1 className='intro__name'>I'm Jonathan Laluces</h1>
                        <p className='info__text'>
                            Check out my projects below or view my{' '}
                            <a className='view__btn' href='/resume'>
                                resume
                            </a>
                        </p>
                    </div>
                </div>

                {/* Projects Section */}
                <div className='projects'>
                    <Projects projects={this.state.projects} />
                </div>
            </div>
        );
    }
}

export default Home;
