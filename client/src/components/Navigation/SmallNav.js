import React from 'react';

// Component Imports
import { Link } from 'react-router-dom';

// Assets
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github_white.png';
import Penguin from '../../assets/penguin_noun.svg';

const SmallNav = (props) => {
    return (
        <div className='container'>
            <div className='navigation'>
                <Link className='navigation__home' to='/'>
                    <img
                        src={Penguin}
                        alt='Penguin black and white logo'
                        className='logo'
                    />
                </Link>
                <button className='navigation__btn' onClick={props.handleMenu}>
                    &#9776;
                </button>
            </div>

            <div
                onClick={props.handleMenu}
                className={props.visible ? 'fullHeight' : 'noHeight'}
                id='hidden-nav'
            >
                {/* <button className="hidden__close" onClick = {props.handleMenu}>&times;</button> */}

                <div className='hidden__container'>
                    <svg
                        className='close__btn'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M6 18L18 6M6 6l12 12'
                        ></path>
                    </svg>
                    <div className='hidden__content'>
                        <Link className='hidden__btn' to='/'>
                            Home
                        </Link>
                        <Link className='hidden__btn' to='/about'>
                            About
                        </Link>
                        <Link className='hidden__btn' to='/resume'>
                            Resume
                        </Link>
                        <div />
                    </div>

                    <div className='hidden__contact'>
                        <h3 className='contact__header'>Contact Info:</h3>
                        <p>(908) 414 3555</p>
                        <p>jlalucescareer123@gmail.com</p>
                        <p>Los Angeles, CA</p>

                        <div className='btn__container'>
                            {/* LinkedIn */}
                            <li>
                                <a
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    href='https://www.linkedin.com/in/jonathan-laluces/'
                                >
                                    <img
                                        alt='social media button: LinkedIn - Jonathan Laluces'
                                        className='social__btn'
                                        src={LinkedIn}
                                    />
                                </a>
                            </li>
                            {/* Github */}
                            <li>
                                <a
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    href='https://github.com/jlaluces123'
                                >
                                    <img
                                        alt='social media button: Github - Jonathan Laluces'
                                        className='social__btn'
                                        src={Github}
                                    />
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallNav;
