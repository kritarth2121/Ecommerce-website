import { Menu } from 'antd';
import { MailOutlined, SettingOutlined ,UserOutlined,UserAddOutlined} from '@ant-design/icons';
import React from 'react';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
class Header extends React.Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={this.state.current} mode="horizontal">
        <Menu.Item key="home" icon={<MailOutlined />}>
         <Link to="/"> Home</Link>
        </Menu.Item>
        <SubMenu key="username" icon={<SettingOutlined />} title="Username">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
         
        </SubMenu>
        <Menu.Item key="login"  icon={<UserOutlined />} className="float-right">
        <Link to="/login">     Login</Link>
        </Menu.Item>
        <Menu.Item key="register"  icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">   Register</Link>
        </Menu.Item>
        
        
      </Menu>
    );
  }
}

export default Header;