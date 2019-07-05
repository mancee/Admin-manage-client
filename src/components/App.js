import React from 'react';
import { WrappedAdvancedSearchForm } from "./AdvancedSearchForm";
import EditableFormTable from './table/EditableTable';

class App extends React.Component {
    render(){
        return (
            <div>
         {/*       <WrappedAdvancedSearchForm /> */}
            <div>
                <EditableFormTable />
            </div>
            
            </div>
        );
    }
}
export default App;