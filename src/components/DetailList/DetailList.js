import React from 'react';
import KeyValue from '../KeyValue';

import './DetailList.less';

export default React.createClass({
    render() {
        let borrowList = '';
        
        borrowList = this.props.list.map((item, index) => {

            return (<li key={index}>
                        <KeyValue left={item.key} right={item.value}></KeyValue>
                    </li>);
            }
        );

        return (
            <section className="details">
                <div className="header">{this.props.title}</div>
                <ul>
                    {borrowList}
                </ul>
            </section>
        );
    },
});
