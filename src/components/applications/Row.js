import React from 'react';
import TableColumn from './TableColumn';


const Row=({rData})=>{
    
    return(
      <tr className='ar-table-row'>
      {rData.map(colData=>
        { 
            return(  
            <TableColumn colData={colData} key={colData.value} />
        )}
      )}
   </tr>
 );
}

export default Row;