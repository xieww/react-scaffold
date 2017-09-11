import React from 'react';
import demo from '../Demo';
import DetailList from '../DetailList';
import './App.less';

// const sss = React

export default React.createClass({
    render() {
        const DETAILS = [{
                key: '姓名',
                value: '夏**'
            }, {
                key: '身份证',
                value: '43021******9834'
            }, {
                key: '借款金额',
                value: '5000.00元'
            }, {
                key: '借款期限',
                value: '50天'
            }, {
                key: '还款方式',
                value: '到期一次性还清本息'
            }, {
                key: '还款本息',
                value: '$65000.00'
            }
        ];

        const CREDIT = [{
                key: '央行征信',
                value: '已认证'
            }, {
                key: '学历征信',
                value: '未认证'
            }, {
                key: '社保征信',
                value: '未认证'
            }, {
                key: '公积金征信',
                value: '已认证'
            }, {
                key: '运营商授权',
                value: '未认证'
            }, {
                key: '芝麻信用',
                value: '已认证'
            }, {
                key: '淘宝征信',
                value: '未认证'
            }, {
                key: '京东征信',
                value: '未认证'
            }, {
                key: '好友信用',
                value: '已认证'
            }
        ];
        
        return (
            <section className="b-detail">
                <DetailList list={DETAILS} title="借款详情"></DetailList>
                <DetailList list={CREDIT} title="征信详情"></DetailList>
            </section>
        );
    },
});
