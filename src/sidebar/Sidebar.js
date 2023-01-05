import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Tweet } from "react-twitter-widgets"
import { Route, Routes, useNavigate } from "react-router-dom"
import VldtForm from './menus/form';
import Input from './menus/input';
import TabsComp from './menus/navigate';

import {Row, Col, Container} from 'react-bootstrap'

const Sidebar = () => {

    const navigate = useNavigate();
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Menu
                onClick={({ key }) => { navigate(key) }}
                items={[
                    { label: "Home", key: "/", icon: <NotificationOutlined /> },
                    { label: "Form", key: "/form", icon: <UserOutlined /> },
                    { label: "Navigation", key: "/navigation", icon: <LaptopOutlined /> },
                    { label: "Input", key: "/input", icon: <NotificationOutlined /> }
                ]}>
            </Menu>

            <Content />
        </div>
    );
};

const Content = () => {
    return (
        <Routes>
            <Route exact path='/' element={
                <div height="30%">
                    <h1 style={{color: "#1DA1F2"}}>Home page</h1>
                    <br />
                    <h2>Sports:</h2>
                    <Container>
                        <Row>
                            <Col> <div> <Tweet tweetId='1609331198123249665' /> </div> </Col>
                            <Col> <iframe width="560" height="315" src="https://www.youtube.com/embed/ZlfKYEG-eXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </Col>
                        </Row>
                    </Container>

                    <br />
                    <h2>Finance:</h2>
                    <Container>
                        <Row>
                            <Col> <div><iframe width="560" height="315" src="https://www.youtube.com/embed/nbrkmJTuGoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> </Col>
                            <Col> <div><Tweet tweetId='1610871544179486720' /> </div> </Col>
                        </Row>
                    </Container>

                    <br />
                    <h2>Programming:</h2>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BMuFBYw91UQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZzaPdXTrSb8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </ div>}>
            </Route>
            <Route exact path='/form' element={<VldtForm />}></Route>
            <Route exact path='/navigation' element={<h1><TabsComp /></h1>}></Route>
            <Route exact path='/input' element={<Input />}></Route>
        </Routes>
    )
}

export default Sidebar;