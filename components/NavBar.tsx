import {  Menu } from 'antd';
const NavBar=()=>{
return(
    <div >
      <Menu theme="light" mode="horizontal" >
        <Menu.Item key='home'>
         <a href="/">   Home</a>
        </Menu.Item>
        <Menu.Item key='about'>
         <a href="/about">About</a>
        </Menu.Item>
        <Menu.Item key='contact'>
         <a href="/contact">Contact Us</a>
        </Menu.Item>
      </Menu>
      </div>
)
}
export {NavBar}