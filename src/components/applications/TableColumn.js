import React, {Component} from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class TableColumn extends Component{
  
  render(){
    return(
    // eslint-disable-next-line react/destructuring-assignment
    (this.props.colData.print === true) &&
        // eslint-disable-next-line react/destructuring-assignment
        <td className='ar-table-col' rowSpan={this.props.colData.rowspan}>{this.props.colData.value}</td>
    );
  }
}

export default TableColumn;