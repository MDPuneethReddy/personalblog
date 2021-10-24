import { Modal,Button, Form, Input} from "antd";
import { useState } from "react";
const Subscribe=()=>{
    const onFinish = (values: any) => {
        console.log(values);
      };
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
        },
      };
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return(
        <div >
            <Button type="link" shape="round" size="small"  onClick={showModal} danger>
        Subscribe for Free
      </Button>
      <Modal title="Get Free Updates In Your Inbox" visible={isModalVisible}  onCancel={handleCancel} footer={null}>
      <Form  name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required:true }]} >
        <Input placeholder="Enter the email address" />
      </Form.Item>
      <Form.Item style={{textAlign:"center"}}>
        <Button type="primary" htmlType="submit" shape="round">
          Subscribe
        </Button>
      </Form.Item>
      </Form>
      </Modal>
        </div>
    )
}
export {Subscribe}