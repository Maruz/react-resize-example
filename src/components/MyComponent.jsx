import React, { Component } from 'react';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offsetWidth: 0
        }
        this.resizeTimer = null;
        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.setElementRef = this.setElementRef.bind(this);
        this.updateWidth = this.updateWidth.bind(this);
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentDidMount() {
        this.updateWidth(this.element.offsetWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
            this.updateWidth(this.element.offsetWidth);
        }, 250);
    }

    setElementRef(element) {
        this.element = element;
    }

    updateWidth(offsetWidth) {
        this.setState({ offsetWidth });
    }

    render() {
        const divStyles = {
            width: '100%',
            backgroundColor: '#eee',
            textAlign: 'center'
        };
        return (
            <div style={divStyles} ref={this.setElementRef}>
                <span>My width is: {this.state.offsetWidth}px</span>
            </div>
        );
    }
}

export default MyComponent;
