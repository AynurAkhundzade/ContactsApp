import {useState,useEffect} from 'react';
import  "../style.css";
import List from "./List";
import Forms from "./Form/Index";

function Contacts() {
    const [contacts,setContacts]=useState([
        {
            fullName:"Mehmet",
            phone_number:123123
        },{
            fullName:"Ayşe",
            phone_number:456789
        },{
            fullName:"Nazlı",
            phone_number:456754
        }
    ]);
    useEffect(()=>{
        console.log(contacts);
    })
  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Forms addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
