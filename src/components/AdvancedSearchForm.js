import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import 'antd/dist/antd.css';

class AdvancedSearchForm extends React.Component {
  state = {
    clientId : '',
    email : '',
    name : '',
    phone : '',
    company : '',
    username: '',
    venue:''
  };

  getFields() {
    const { getFieldDecorator } = this.props.form;
    const children = [];
      children.push(
       <Row style={{marginLeft:"20px"}}>
        <Col span={3}>
          <Form.Item label="Client ID" >
            {getFieldDecorator('clientID', {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                },
              ]
            })(<Input placeholder="Enter client ID" />)}
          </Form.Item>
          </Col>
          <Col span={3}>
          <Form.Item label="Email">
            {getFieldDecorator('email', {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                },
              ]
            })(<Input placeholder="Enter Email" />)}
          </Form.Item>
          </Col>
          <Col span={3}>
          <Form.Item label=" Name">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                },
              ]
            })(<Input placeholder="Enter Name" />)}
          </Form.Item>
          </Col>
          <Col span={3}>
          <Form.Item label="Phone no">
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                },
              ]
            })(<Input placeholder="Enter Phone no" />)}
          </Form.Item>
          </Col>
          
            <Col span={3}>
          <Form.Item label="Company name">
            {getFieldDecorator('company', {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                },
              ]
            })(<Input placeholder="Enter Company name" />)}
          </Form.Item>
          </Col>
          <Col span={3}>
          <Form.Item label="User name">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                },
              ]
            })(<Input placeholder="Enter User name" />)}
          </Form.Item>
          </Col>
          <Col span={3}>
          <Form.Item label="Venue">
            {getFieldDecorator('venue', {
              rules: [
                {
                  required: false,
                  message: "Input something!"
                },
              ]
            })(<Input placeholder="Enter Venue" />)}
          </Form.Item>
          </Col>
       </Row>  
      );

    return children;
  }

 
  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
      <Row gutter={17}>{this.getFields()}</Row>
        <Row>
          <Col span={17} >
            <Button type="primary"  htmlType="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}


export const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);


