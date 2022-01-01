import { Modal,Button, Form, Input, notification} from "antd";
import {SmileTwoTone } from "@ant-design/icons"
import { useState } from "react";
import { addDoc } from "@firebase/firestore";
import { usersCollectionRef } from "./firebase/tablesCollectionRef";
const Subscribe=()=>{
  const [success,setSuccess]=useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  
    const onFinish = async(values: any) => {
      try{
      await addDoc(usersCollectionRef,{name:values.username,email:values.user.email})
      setSuccess(true)
      form.resetFields();
      }
      catch(error){
        notification['error']({
          message: 'success',
          description:
            'something went wrong, please write us',
        })
      }
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
        },
      };
    
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setSuccess(false) 
    setIsModalVisible(false);
  };
    return(
        <div >
            <Button type="link" shape="round" size="small"  onClick={showModal} danger>
        Subscribe for Free
      </Button>
      <Modal title="Get Free Updates In Your Inbox" visible={isModalVisible}  onCancel={handleCancel} footer={null}>
      <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        label="Name"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input placeholder="Enter the first name" />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required:true }]} >
        <Input placeholder="Enter the email address" />
      </Form.Item>
      <Form.Item style={{textAlign:"center"}}>
        <Button type="primary" htmlType="submit" shape="round">
          Subscribe
        </Button>
      </Form.Item>
      </Form>
      {success &&
       <p style={{textAlign:"center"}}><SmileTwoTone /> SUCCESS! ThankYou for Subscribing</p>
      }
      </Modal>
        </div>
    )
}
export {Subscribe}