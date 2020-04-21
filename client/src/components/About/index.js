import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <section className='hero'>
                <h2>About Me</h2>
            </section>

            <section className='about__intro'>
                <div className='intro__div'>
                    <p className='title'>Software Engineer</p>
                </div>

                <div className='intro__header'>
                    <h2 className='header__name'>
                        Hello, I'm Jonathan Laluces
                    </h2>
                </div>

                <div className='intro__description'>
                    <p className='intro__paragraph'>
                        I still remember the first day I started my journey on
                        becoming a web developer like it was yesterday.
                        Graduating from Lambda School's coding bootcamp, I have
                        created a plethora of websites, modern web applications,
                        and got to fiddle with various technologies. From the
                        fundamentals of HTML and CSS, my programming experience
                        has centered around JavaScript which stemmed into
                        various different technologies such as React on the
                        front end and NodeJS on the backend.
                    </p>
                </div>
            </section>

            <section className='about__skills'></section>
        </div>
    );
};

export default About;
