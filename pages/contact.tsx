import { Form, Input, Button, notification } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const contact=()=>{
    const [form] = Form.useForm();
    const openNotificationWithIcon = (type:string) => {
        if(type=== 'success'){
        notification[type]({
          message: 'success',
          description:
            'Message sent successfully',
        })

    }
        else if(type==='error'){
            notification[type]({
                message: 'error',
                description:
                  'Message not sent',
              })}
        }
    const onFinish = (values: any) => {
        const options={
            method:"POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify(values)
        }
        fetch("/api/email",options)
        .then(response=>{
          if(response.status===200){
            openNotificationWithIcon('success')
            form.resetFields();
          }
          else{
            openNotificationWithIcon('error')
          }
        }).catch(error=>{
            openNotificationWithIcon('error')
        })
      };
return(
    <div className="contact-form">
        <h1 style={{textAlign:"center"}}>Contact Us </h1>
        <Form {...layout} name="nest-messages" form={form} onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email',required:true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'subject']} label="subject">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'message']} label="message" rules={[{ required: true }]}>
        <Input.TextArea placeholder="Enter your message "
          autoSize={{ minRows: 3, maxRows: 100 }} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
)
}
export default contact