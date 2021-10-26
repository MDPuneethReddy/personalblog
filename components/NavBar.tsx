import {  Menu,Row,Col,Button } from 'antd';
import { Subscribe } from './Subscribe';
import { MenuOutlined } from '@ant-design/icons';
const NavBar=()=>{
return(
    <div >
      <Row justify='center'>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Row>
          <Col xl={12} lg={12} md={12} sm={4} xs={4}>
            <Menu
              theme='light'
              mode='horizontal'
              overflowedIndicator={<MenuOutlined />}
            >
              <Menu.Item
                key="Home"
              >
                <a href="/">Home</a>
              </Menu.Item>
              <Menu.Item
                key="About"
              >
                <a href="/about">About</a>
              </Menu.Item>
              <Menu.Item
                key="contact"
              >
                <a href="/contact">Contact Us</a>
              </Menu.Item>
              <Menu.Item key="subscribe">
              <Subscribe />
            </Menu.Item>
            
            </Menu>
        </Col>
      </Row>
  </Col>
</Row>
     
      </div>
)
}
export {NavBar}