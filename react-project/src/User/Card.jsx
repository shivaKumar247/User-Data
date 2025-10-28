import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import axios from 'axios';
import "./card.css"

Modal.setAppElement('#root');

function Card() {
  const [users, setUsers] = useState([]);
  const [liked, setLiked] = useState(new Set());
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
   axios.get("http://localhost:8080/users")
      .then((res) => {
        console.log(res);
        let { data } = res;
        console.log(data);
        setUsers(data);
      })

      .catch(() => {
        console.log("error occured");
      })
  }, []);

  const toggleLike = id => {
    setLiked(prev =>
      prev.has(id) ? new Set([...prev].filter(x => x !== id)) : new Set(prev).add(id)
    );
  };

  const openEdit = user => {
    setEditingUser(user);
    setShowEditModal(true);
  };

    let deleteData= (id)=>{
            if(window.confirm("do you want to delete the data"))
            {
             console.log(id);
             axios.delete(`http://localhost:8080/users/${id}`)
             .then(()=>{
                console.log("data is deleted");
                window.location.reload()
                // toast.success("data successfully deleted")
            })
            .catch(()=>{
                console.log("error occcured");
                
            })

            }
    }

  
  return (
    <div>
           <div id='new-user'> 
           <button><Link to="/Create">Create new users</Link></button>    
            </div>

    <div className="user">
      {users.map((value, index) => {
        let street= value.street
        return(
    <div className="cardContainer">
      <div className="card-image">
       <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${value.id}`} alt="" />
       </div>

        <div id="category"> <h2>{value.name}</h2> 

              <div id="heading"> 
              
              <p> <strong>Email:  </strong> {value.email}</p>
              <p><strong>Phone:  </strong> {value.phone}</p>
              {/* <p><strong>Address:  </strong> {value?.address?.street}, {value?.address?.city}</p> */}
              <p><strong>Website:  </strong> {value.website}</p>
              {/* <p><strong>Company:  </strong> {value?.company}</p> */}

               <div id="actions">
                 <button onClick={() => toggleLike(value.id)}>{liked.has(value.id) ? '♥️' : '♡'}</button>
                 <button> <Link to={`/edit/${value.id}`}>Edit ✏️ </Link></button>
                 <button onClick={()=>{deleteData(value.id)}} >🗑️</button>
                </div>
            </div>    
        </div>
    </div>   
  )
    })}
  </div>

  </div>
  )
}

export default Card;