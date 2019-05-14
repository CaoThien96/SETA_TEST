import React,{Component} from 'react';
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import Icon from "antd/es/icon";
import Button from "antd/es/button/button";
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class FormNew extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                alert(JSON.stringify(values))
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'foo',
                        body: 'bar',
                        userId: 1
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then(response => response.json())
                    .then(json => {
                        this.props.handleNewSuccess()
                    })

            }else{

            }
        });
    };
    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item >
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input your title!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Title"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('body', {
                        rules: [{ required: true, message: 'Please input your body!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Body"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('userId', {
                        rules: [{ required: true, message: 'Please input your userId!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="User Id"
                            type={'number'}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                        Save
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'new_post_form' })(FormNew);
export default WrappedHorizontalLoginForm