import React, { useEffect, useState } from 'react';


function List({contacts}) {

    const [filterText,setFilterText]=useState("");

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    })
   
  return (
    <div>
        <input placeholder='Filter Contacts' value={filterText} onChange={(e)=>{setFilterText(e.target.value)}}/>
      <ul className='list'>
        {
            filtered.map((contact,i)=>{
                return <li key={i}><span>{contact.fullName}</span>
                <span>{contact.phone_number}</span></li>;
            })
        }
      </ul>

      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List
