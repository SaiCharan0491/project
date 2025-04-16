
import { useState, useEffect } from 'react';

export default function Data() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/userManagement')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <>
      <div>
        <button onClick={() => console.log(users)}>Show All Users</button>
        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: '10px' }}>
            <p style={{ color: 'red' }}>Email: {user.email}</p>
            <p style={{ color: 'yellow' }}>Name: {user.username}</p>
            
          </div>
        ))}
      </div>
    </>
  );
}
// import {useState, useEffect} from 'react'
// export default function Data(){
//     const [users, setUser] = useState([]);
//     useEffect(() =>{
//         fetch('')
//             .then((res) => {
//                 return res.json()
//             })
//             .then((data) => {
//                 console.log(data)
//                 setUser(data)
//             })
//     }, [])
//     return (
//         <> <div><button onclick={setUsers} >
//             {users.map((user) => (
               
//                 <div key={user.id} style={{ marginBottom: '10px' }}>
//               <p style={{ color: 'red' }}>Email: {user.email}</p>
//               <p style={{ color: 'yellow' }}>Name: {user.name}</p>
//               </button>
//             </div>
//         </>
//             //    <> <button key={user.id} onClick={() => alert(user.email)} style={{ color: 'red' }}>Show Email</button>
//             //     <button key={user.id} onClick={() => alert(user.name)} style={{ color: 'yellow' }}>Show Name</button></>// <h3 key={user.id}>{user.email}</h3>
//             ))}
        
//             )
// }
