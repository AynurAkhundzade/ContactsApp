import {useEffect, useState} from 'react';

const initialValues ={fullName:"",phone_number:""};

function Forms({addContacts,contacts}) {
   const [form,setForm]=useState(initialValues);
   useEffect(()=>{
     setForm(initialValues);
   },[contacts])

   const onChangeInput=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
   }

   const onSubmit=(e)=>{
    e.preventDefault();
    if(form.fullName ===""||form.phone_number===""){
        return false;
    }
    addContacts([...contacts,form]);
    // setForm(initialValues);
   }

  return (
    <form onSubmit={onSubmit}>
    <div>
    <input name="fullName" value={form.fullName} onChange={onChangeInput}/>
    </div>
      <div>
      <input name="phone_number" value={form.phone_number} onChange={onChangeInput}/>  
      </div> 
      <div className='btn'>
        <button >Add</button>
      </div>
    </form>
  )
}

export default Forms;
