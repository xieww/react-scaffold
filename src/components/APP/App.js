import React from 'react';
import demo from '../Demo';
import './App.less';

// const sss = React

export default React.createClass({
    render() {
        let t = '';
        
        return (
            <section className="b-detail">
                <div className="details">
                    <div className="header">借款详情</div>
                    <ul>
                        <li>
                            <span className="left">姓名</span>
                            <span className="right">夏**</span>
                        </li>
                        <li>
                            <span className="left">身份证</span>
                            <span className="right">43021******9834</span>
                        </li>
                    </ul>
                </div>
                <div></div>
            </section>
        );
    },
});
