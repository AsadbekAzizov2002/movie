import { memo, useState } from 'react';
import { Button, Input, Modal, Checkbox, Form, type FormProps, } from "antd"


type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


const Bookmark = () => {

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    handleCancel()
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
    
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="Bookmark">
      <h2 className=' text-white'>Bookmark</h2>
      <Button onClick={showModal} >See more</Button>
      <Button type='primary'>See more</Button>
      
      <div>
        
        <Modal
          title="Basic Modal"
          closable={{ 'aria-label': 'Custom Close Button' }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          centered
          footer={false}
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default memo(Bookmark);