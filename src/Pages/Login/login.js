// 登录
import { Component } from "react";
import Storeaction from "../../Store/storeaction"
import { Input, Button, Form } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import "./login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onFinish = (values) => {
        // 登录账号 admin 密码 123456
        if (this.isPassWord(values))
            this.props.history.history.push('/common/home')
        window.location.reload()//刷新当前页面
    };
    isPassWord = (values) => (values.username === 'admin' && values.password === "123456")

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="login">
                <div className="login_content">
                    {/* 标题 */}
                    <div className="login_item login_title">
                        <h3>欢迎登录...</h3>
                    </div>
                    {/* 输入框 */}
                    <div className="login_item login_main">
                        <Form
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input size="large" placeholder="Please enter your account number." prefix={<UserOutlined />} />
                            </Form.Item>
                            <div style={{ margin: '10px 0' }}></div>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password size="large" placeholder="Please enter your password." prefix={<KeyOutlined />} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" block style={{ marginTop: '10px' }} htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    {/* 底部 */}
                    <div className="login_item login_footer">
                        <p>{this.props.company}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Storeaction(Login);