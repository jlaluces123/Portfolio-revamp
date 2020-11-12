import React from 'react';
import './navigation.css';

// Component Imports
import SmallNav from './SmallNav.js';
import BigNav from './BigNav.js';

class Navigation extends React.Component {
    state = {
        visible: false,
        width: 0,
    };

    componentDidMount = () => {
        this.readWindowSize();
        window.addEventListener('resize', this.readWindowSize);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.readWindowSize);
    };

    handleMenu = () => {
        this.setState({ visible: !this.state.visible });
    };

    readWindowSize = () => {
        // console.log('detected window width: ', window.innerWidth);
        this.setState({ width: window.innerWidth });
    };

    render() {
        if (this.state.width > 768) {
            // console.log(this.state.width);
            return <BigNav />;
        } else {
            return (
                <SmallNav
                    visible={this.state.visible}
                    handleMenu={this.handleMenu}
                />
            );
        }
    }
}

export default Navigation;
