import React from 'react';
import './ClientDetail.css'
import { Card, Table } from "antd";
import Venue from './Venue';

const columns = [
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date"
  },
  {
    title: "Pending Dues",
    dataIndex: "PendingDues",
    key: "Pending Dues"
  },
  {
    title: "Payment Done",
    dataIndex: "PaymentDone",
    key: "Payment Done"
  }
];
const data = [
  {
    key: "1",
    Date: "9/01/2019",
    PendingDues:"1000",
    PaymentDone: "2000"
  }
];

class ClientDetail extends React.Component {
    state = {
        regdate: '9/109/2019',
        adhaar: '23456789',
        gst : '676021',
        ifsc : '567890' ,
        bankname: 'sbi' ,
        branch: 'tilak nagar',
        Accountno: '34567'
    }
       
    render(){
        return (
          <div>
            <div>
              <h3>
                Registered on : {this.state.regdate} &nbsp;&nbsp; Adhaar
                number : {this.state.adhaar} &nbsp; &nbsp;
                GST number : {this.state.gst}
              </h3>
            </div>
            &nbsp;
            <div>
              <Card title="Account Details" style={{ width: 600 }}>
                <p>IFSC Code : {this.state.ifsc}</p>
                <p>Bank Name :{this.state.bankname}</p>
                <p>Branch : {this.state.branch}</p>
                <p>Account Number :{this.state.Accountno}</p>
              </Card>
            </div>
            &nbsp;
            <div>
              <Card title="Venues" style={{ width: 600 }}>
                <Venue />
              </Card>
            </div>
              &nbsp;
            <div>
              <Card title="Transaction Details" style={{ width: 900 }}>
                <Table columns={columns} dataSource={data} pagination= {false}/>
              </Card> 
            </div>

            <div />
          </div>
        );
    }
}
export default ClientDetail;