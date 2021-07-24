/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
/* eslint-disable guard-for-in */
/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
import React, { Component} from 'react';
import Row from './Row';

class TableRowspan extends Component {
  constructor(props, context) {
    super(props, context);
    const myProps=this.getDataModelled();
    const propsToPass=this.getDataWithSpanCount(myProps);
    this.state={
      tableNewData:propsToPass
    }
  }

  

getDataModelled(){
    const { tData } = this.props;
    const newRowData = [];
    for(let i=0; i< tData.length; i++){
      const obj = tData[i];
      const newColData=[];
        for (const item in obj){
          // eslint-disable-next-line no-new-object
          newColData.push(new Object({
            key: item,
            value:obj[item],
            rowspan:1,
            print:true
          }));
        };
         newRowData.push(newColData);
    };
    return newRowData;
  }
  getDataWithSpanCount(myProps){
    for(let i=1;i<myProps.length;i++)
    {
      for(let j=0;j<myProps[i].length;j++)
      {
        for(let k= i-1; k>=0 && myProps[i][j].value === myProps[k][j].value;k--){
          switch (myProps[k][j].key) {
            case'post' :
              myProps[k][j].print = true;
              break;
            case 'comment' :
              myProps[k][j].print = true;
              break;
            case 'view' :
              myProps[k][j].print = true;
              break;
            case 'like' :
              myProps[k][j].print = true;
              break;
            case 'press' :
              myProps[k][j].print = true;
              break;
            case 'positiveRate' :
              myProps[k][j].print = true;
              break;
            case 'negativeRate' :
              myProps[k][j].print = true;
              break;
            default: 
              myProps[k][j].rowspan = myProps[k][j].rowspan+1;
              myProps[k+1][j].print = false;
              break;
          }
        }
    }
  }
  return myProps;
}
  render() {
    const statesItems = this.state;
    const propsItems = this.props;
    return (
      <table className='ar-table'>
          <thead className='ar-table-thead'>
          <tr className='ar-table-thead-row'>{propsItems.tColumns.map(tColumn=> {
            return(
              <th className='ar-table-thead-header' key={tColumn.header}>{tColumn.header}</th>
            )
          })}
          </tr>
          </thead>
          <tbody>
          {statesItems.tableNewData.map((rData, idx) =>{
            return(
              // eslint-disable-next-line react/no-array-index-key
              <Row rData={rData} key={idx}/>
            )
          })}
          </tbody>
        </table>
    );
  }
}

export default TableRowspan;