import React from 'react';
import { Table } from 'antd';

class EnableVenue extends React.Component{
  constructor(props){
 
  super(props);
  this.columns = [
    { title: 'Venue', dataIndex: 'venue', key: 'venue' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <span><a href="javascript:;">Disable</a> &nbsp;
       <a href="javascript:;">Enable</a></span>
    },
  ];
  this.state={
    data : [
    {
      key: 1,
      venue: 'John Brown',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    }
  ],
  }
}
  handleDisable = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  render(){
return(
  <Table
    pagination={false}
    columns={this.columns}
    expandedRowRender={record => <p style={{ margin: 0 }} >{record.description}
  
    </p>}

    dataSource={this.state.data}
  />
);
}}
export default EnableVenue;