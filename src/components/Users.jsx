import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUser=useLoaderData();
    const[users,setUsers]=useState(loadedUser);
    const handleDelete=id=>{
      fetch(`http://localhost:5000/user/${id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data=>{
        if(data.deletedCount >0){
          console.log('Deleted Successfully')

          // remove the item from UI
          const remainingUsers=users.filter(user=>user._id !== id);
          setUsers(remainingUsers);
        }
      })

    }
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last Loged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map(user=>
            
                <tr key={user._id} >
                  <th>1</th>
                  <td>{user.email}</td>
                  <td>{user.createAt}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>
                    <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                  </td>
                </tr>
               
              )
          }
          </tbody>
        </table>
      </div>
    );
};

export default Users;