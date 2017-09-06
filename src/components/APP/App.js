import React from 'react';
import demo from '../components/Demo';

// const sss = React

export default React.createClass({
    defaultProps: {};

    

    this.route.push({
        ''
    });

    render() {
        let t = '';
        
        return (
            <div>
                <demo></demo>
                <section>
                  {this.props.children || 'Welcome to React kick off'}
                </section>
            </div>
        );
    },
});
