import React from 'react';
import './LongButton.less';

export default React.createClass({
    getInitState() {
        return {
            buttonText: 0
        }
    },

    clickMe() {
        //alert('click button!');
        this.setState({
            buttonText: Math.random()
        });
    },

    render() {
        
        return (
            <section className="long-button">
                <span className="single-button" onClick={this.clickMe}>放款{this.state.buttonText}</span>
            </section>
        );
    },
});
