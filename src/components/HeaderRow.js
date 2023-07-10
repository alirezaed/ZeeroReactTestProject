import * as React from "react";


export default function HeaderRow({setColId}) {

  return (
    <thead>
      <tr>
        <th onClick={()=>setColId&&setColId(1)}>Title</th>
        <th onClick={()=>setColId&&setColId(2)}>Price</th>
        <th onClick={()=>setColId&&setColId(3)}>Category</th>
        <th></th>
      </tr>
    </thead>
  );
}
