import React from 'react';
import './news-header.less';

export default React.createClass({
    render() {

        return (
            <section className="news-header">
                <span className="icon"></span>
                <span className="title">今日头条（标题）</span>
                <span className="icon"></span>
            </section>
        );
    },
});
