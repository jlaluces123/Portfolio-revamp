import React from 'react';
import './resume.css';

// Assets
import ResumePDF from '../../assets/Refined_Resume.pdf';

const Resume = () => {
    return (
        <div className='resume'>
            <section className='hero resume__hero'>
                <h2>Experience</h2>
            </section>

            <p className='download'>
                Download my resume{' '}
                <a
                    download='JonathanLaluces_Resume.pdf'
                    href={ResumePDF}
                    title='Jonathan Laluces Resume'
                    className='view__btn'
                >
                    here
                </a>
            </p>

            <section className='resume__page'>
                <div className='project__box'>
                    <div className='projects__top'>
                        <h2 className='job__title'>Software Engineer</h2>
                        <p className='experience__date'>
                            September 2019 - February 2020
                        </p>
                    </div>

                    <h4 className='project__name'>Lambda Studios</h4>
                    <p className='project__info'>
                        Lambda Studios is Lambda School's in-house agency! As a
                        developer for Lambda Studios, I take on projects given
                        by clients and work with a team of developers to create
                        our clients' dreams and turn them into reality.
                        Utilizing agile methodology, as a team of developers we
                        prioritize tasks, hold stand up meetings, meet with
                        clients, and develop full applications from scratch.
                    </p>
                </div>

                <div className='project__box'>
                    <div className='projects__top'>
                        <h2 className='job__title'>Web Developer</h2>
                        <p className='experience__date'>
                            March 2019 - September 2019
                        </p>
                    </div>

                    <h4 className='project__name'>Freelance</h4>
                    <p className='project__info'>
                        I currently freelance for digital marketing agencies and
                        any other clients I pick up. Throughout my time
                        freelancing, I have learned more about boosting a site's
                        performance, how to communicate to clients, and how to
                        manage my time efficiently while creating quality code.
                    </p>
                </div>

                <div className='project__box'>
                    <div className='projects__top'>
                        <h2 className='job__title'>Intern</h2>
                        <p className='experience__date'>
                            October 2017 - June 2018
                        </p>
                    </div>

                    <h4 className='project__name'>Visual Communications</h4>
                    <p className='project__info'>
                        Before I ever wrote my first line of code I was into the
                        arts, specifically film and music! During this
                        internship I learned what it took to coordinate multiple
                        volunteer teams, reaching out to communities, and
                        learning how to maintain a Wordpress website.
                    </p>
                </div>
            </section>

            <section className='skills'>
                <h1 className='skills__title'>Skills</h1>

                <div className='skills__tools'>
                    {/* Front End */}
                    <div className='tools__div'>
                        <h4 className='tech__header'>Front-End</h4>
                        <ul className='tools__list'>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>LESS</li>
                            <li>JavaScript</li>
                            <li>ReactJS</li>
                            <li>Jest Testing</li>
                            <li>Redux</li>
                        </ul>
                    </div>

                    {/* Back End */}
                    <div className='tools__div'>
                        <h4 className='tech__header'>Back-End</h4>
                        <ul className='tools__list'>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>Knex</li>
                            <li>SQL</li>
                            <li>SQLite3</li>
                            <li>PostgreSQL</li>
                            <li>Python</li>
                        </ul>
                    </div>

                    {/* Workflow*/}
                    <div className='tools__div'>
                        <h4 className='tech__header'>Workflow</h4>
                        <ul className='tools__list'>
                            <li>Agile Development</li>
                            <li>Experience as Scrum Master</li>
                            <li>Responsive Development</li>
                            <li>Attention to Accessibility and SEO</li>
                            <li>Design into Code</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='education'>
                <h1 className='education__title'>Education</h1>

                <div className='education__div'>
                    <div className='project__box'>
                        <div className='projects__top'>
                            <h2 className='job__title'>Lambda School</h2>
                            <p className='experience__date'>
                                July 2018 - March 2019
                            </p>
                        </div>

                        <h4 className='project__name'>
                            Certificate of Completion
                        </h4>
                        <p className='project__info'>
                            Lambda School is an intensive Computer Science &
                            Software Engineering Academy that focuses on real­
                            world practices, taking students through a hands­-on
                            experience using an in-­depth curriculum that
                            focuses on Computer Science, Software Engineering,
                            and Web Development.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;
