import React from 'react'
import { Menu, Anchor } from 'antd'
import {
    HomeOutlined,
    CalculatorOutlined,
    SunOutlined,
    MoneyCollectOutlined,
    BarsOutlined,
    DragOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'


const MenuList = ({ darkTheme }) => {
    return (
        <Menu
            theme={darkTheme ? 'dark' : 'light'}
            mode='inline'
            className='bigMenu'>
            <Menu.Item
                key='home'
                icon={<HomeOutlined />}
            >
                <Link to='/le-proj-la/'>Home</Link>
            </Menu.Item>

            {/* Optional */}

            <Menu.SubMenu
                key='sousMenu'
                icon={<BarsOutlined />}
                title='Tâches'>
                <Menu.Item key='tache1'>Tâche 1</Menu.Item>
                <Menu.Item key='tache2'>Tâche 2</Menu.Item>
            </Menu.SubMenu>

            {/* Optional */}

            <Menu.Item key='calculator'icon={<CalculatorOutlined />}>
                <Link to='/le-proj-la/calculator'>Calculator</Link>
            </Menu.Item>
            <Menu.Item key='weather' icon={<SunOutlined />}>
                <Link to='/le-proj-la/weather'>Weather</Link>
            </Menu.Item>
            <Menu.Item key='convertor' icon={<MoneyCollectOutlined />}>
                <Link to='/le-proj-la/convertor'>Convertor</Link>
            </Menu.Item>
            <Menu.Item key='dragdrop' icon={<DragOutlined />}>
                <Link to='/le-proj-la/dragdrop'>Drag & Drop</Link>
            </Menu.Item>
        </Menu>
    )
}

export default MenuList