import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Popconfirm, Form, Modal, Button } from 'antd';
import ClientDetail from './ClientDetail';
import './ClientDetail.css'
import { WrappedAdvancedSearchForm } from '../AdvancedSearchForm';

const data = [];
for (let i = 0; i < 20; i++) {
  data.push({
      key: i.toString(),
      clientID: i.toString(),
      name: `Client ${i}`,
      email: `client ${i}@gmail.com`,
      phone: `${i}${i}${i}${i}${i}${i}${i}${i}${i}`,
      company: `London Park no. ${i}`,
      pendingpay: '1000',
      username: `client ${i}@gmail.com`
  });
}
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}

class EditableTable extends React.Component {
  state = { visible: false };
    constructor(props) {
      super(props);
      this.state = { data, editingKey: '' };
      this.columns = [
        {
          title: 'serialno',
          dataIndex: 'key',
          width: '5%',
          editable: false,
        },
        {
          title: 'clientID',
          dataIndex: 'clientID',
          width: '5%',
          editable: false,
        },
        {
          title: 'name',
          dataIndex: 'name',
          width: '10%',
          editable: true,
        },
        {
          title: 'email',
          dataIndex: 'email',
          width: '15%',
          editable: true,
        },
        {
          title: 'phone',
          dataIndex: 'phone',
          width: '10%',
          editable: true,
        },
        {
          title: 'company',
          dataIndex: 'company',
          width: '10%',
          editable: true,
        },
        {
          title: 'pendingpay',
          dataIndex: 'pendingpay',
          width: '10%',
          editable: true,
        },
        {
          title: 'username',
          dataIndex: 'username',
          width: '15%',
          editable: true,
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (text, record) => {
            const { editingKey } = this.state;
            const editable = this.isEditing(record);
            return (
                editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      href="javascript:;"
                      onClick={() => this.save(form, record.key)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (<span>
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a href="javascript:;">Delete</a>
            </Popconfirm>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
                Edit
              </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="javascript:;" onClick={this.showModal}>View Details</a>
              <Modal
                  title="Details"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}

                >
                 < ClientDetail />
                </Modal>
              </span>
            )
            
            )
          },
          
        },
      ];
    }
 /*   componentDidMount(){
      fetch('')
      .then(response=>)
    }
  */
    isEditing = record => record.key === this.state.editingKey;
    
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      this.setState({
        visible: false,
      });
    }
    cancel = () => {
      this.setState({ editingKey: '' });
    };
    
    handleDelete = clientID => {
        const data = [...this.state.data];
        this.setState({ data: data.filter(item => item.clientID !== clientID) });
    };

    save(form, key) {
      form.validateFields((error, row) => {
        if (error) {
          return;
        }
        const newData = [...this.state.data];
        const index = newData.findIndex(item => key === item.key);
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, {
            ...item,
            ...row,
          });
          this.setState({ data: newData, editingKey: '' });
        } else {
          newData.push(row);
          this.setState({ data: newData, editingKey: '' });
        }
      });
    }
  
    edit(key) {
      this.setState({ editingKey: key });
    }
  
    render() {
      const components = {
        body: {
          cell: EditableCell,
        },
      };
  
      const columns = this.columns.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            inputType: col.dataIndex === 'clientID' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record),
          }),
        };
      });
  
      return (
        
        <EditableContext.Provider value={this.props.form}>
          <WrappedAdvancedSearchForm />
          <Table
            components={components}
            bordered
            dataSource={this.state.data}
            columns={columns}
            rowClassName="editable-row"
            pagination={{
              onChange: this.cancel,
            }}
          />
        </EditableContext.Provider>
      );
    }
  }
  
  const EditableFormTable = Form.create()(EditableTable);
  export default EditableFormTable;
  