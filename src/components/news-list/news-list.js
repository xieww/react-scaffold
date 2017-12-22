import React from 'react';
import { Link } from 'react-router';

import KeyValue from '../KeyValue';

import './news-list.less';

export default React.createClass({
    render() {
        let newsList = '';
        
        newsList = this.props.list.map((item, index) => {

            return (<li key={index}>
                        <Link to="/detail" query={{id: 4}}>
                            <div className="title">{item.title}</div>
                            <div className="main">
                                <span>{item.summary}</span>
                                <img src={item.img[0]} />
                            </div>
                        </Link>
                    </li>);
            }
        );


        // this.props
        // this.state
        return (
            <section className="news-list">
                <ul>
                    {newsList}
                </ul>
            </section>
        );
    },
});
