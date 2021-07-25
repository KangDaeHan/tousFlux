import React, {Component} from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class TableColumn extends Component{
  render(){
    const propsItem =this.props;
    return(
    (propsItem.colData.print === true) &&
        <td className='ar-table-col' rowSpan={propsItem.colData.rowspan}>{propsItem.colData.value}</td>
    );
  }
}

export default TableColumn;