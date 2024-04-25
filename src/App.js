import React, { useEffect, useState } from 'react'
import { db } from './firebase-config'
//collection for ref or collectionand getDocs for reading docs of collection
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore"; 

import { doc } from 'firebase/firestore/lite';


export default function App() {
  
  const[users,setUsers]=useState([]);
  const[name,setName]=useState();
  const[age,setAge]=useState();

  const usersCollectionRef=collection(db,"crud");

  const updateAge = async (id, age) => {
    const userDoc = doc(usersCollectionRef, id); // Reference the document within the collection
    const newAge = { age: age + 5 };
    await updateDoc(userDoc, newAge);
}

   const deleteUser=async(id)=>{
     const userDoc= doc(usersCollectionRef,id);
     await deleteUser(userDoc);
   }

  const createUser= async()=>{ //in userCollectionref collection add a doc obj with keys name and age
         await addDoc(usersCollectionRef,{name:name,age:age})
  }
 
  useEffect(()=>{
    const getUsers =async()=>{
        const data = await getDocs(usersCollectionRef);
        console.log(data);
                                 //map return an array
        const docsRef=data.docs.map((doc)=>(
          {    
            ...doc.data(),id:doc.id
          }
        ))

        // console.log(docsRef);
        //now users state contain all users information as an array
        setUsers(docsRef)
    }

    getUsers();
  },[])

 

  return (
    <div>
      <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
      <input type="number" placeholder='Enter your age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={createUser}>Create User</button>
      {users.map((user)=>{
        return <div>
         <h1>Name:{user.name}</h1>
         <h1>Age:{user.age}</h1>
         <button onClick={()=>updateAge(user.id,user.age)}>Update Age</button>
         <button onClick={()=>deleteUser(user.id)}>Delete User</button>
         </div>
      })}
    </div>
  )
}
