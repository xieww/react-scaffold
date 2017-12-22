import React from 'react';
import NewsHeader from '../news-header';
import NewsNav from '../news-nav';
import NewsList from '../news-list';

import './App.less';

// const sss = React

export default React.createClass({
    render() {
        const navList = [
            {
                text: '推荐',
                key: 'sug'
            }, {
                text: '健康'
            }, {
                text: '热点'
            }, {
                text: '汽车'
            }, {
                text: '社会'
            }, {
                text: '美食'
            }, {
                text: '科技'
            }, {
                text: '娱乐'
            }
        ];
        const list = {
            sug: [
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                },
                {
                    title: '诺贝尔奖',
                    img: [
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507984237855&di=fcaaed19f825dad730f2667ffb426e4d&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F4446%2F4446-8866.jpg'
                    ],
                    summary: '2017年诺贝尔奖获得者，'
                }
            ]
        };
        // JSX
        return (
            <section className="news">
                <div>这是我们的第一行</div>
                <NewsHeader className="header"></NewsHeader>
                <NewsNav className="nav" list={navList}></NewsNav>
                <NewsList list={list.sug}></NewsList>
            </section>
        );
    },
});
