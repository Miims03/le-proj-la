import React from 'react'
import { useState } from 'react'
import { Layout, Button, theme } from 'antd'
import MenuList from './MenuList'
import ThemeBtn from './ThemeBtn'
import Logo from './Logo'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Routes, Route } from 'react-router-dom'
const { Header, Sider, Footer, Content } = Layout
import Home from './Home'
import Calculator from './Calculator'
import Weather from './Weather'
import Convertor from './Convertor'
import DragDrop from './DragDrop'
import Picker from './Picker'


function Sidebar() {

    const [darkTheme, setDarkTheme] = useState(true)
    const [collaps, setCollaps] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
    }

    const {
        token: { colorBgContainer, borderRadiusLG }
    } = theme.useToken()

    return (
        <Layout>
            <Sider 
                // style={darkTheme ? {background : '#27355d'} : {background: '#b5b5b5'}}
                trigger={null}
                collapsible
                collapsed={collaps}
                theme={darkTheme ? 'dark' : 'light'}    
                className='sidebar'>
                <Logo collaps={collaps} />
                <MenuList darkTheme={darkTheme} />
                <ThemeBtn darkTheme={darkTheme} toggleTheme={toggleTheme} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        className='toggle'
                        onClick={() => setCollaps(!collaps)}
                        type='text'
                        icon={collaps ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    />
                </Header>
                <Content style={{ 
                    margin: '0 16px',
                    }}>

                    <div
                        className='content'
                        style={{
                            padding: 24,
                            minHeight: '82vh',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Routes>
                        <Route path='/allProj/' element={<Home />} />
                            <Route path='/allProj/calculator' element={<Calculator />} />
                            <Route path='/allProj/weather' element={<Weather />} />
                            {/* <Route path='/allProj/convertor' element={<Convertor />} /> */}
                            <Route path='/allProj/dragdrop' element={<DragDrop />} />
                            <Route path='/allProj/calendar' element={<Picker />} />
                        </Routes>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Miims ©{new Date().getFullYear()}  
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Sidebar