import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {

    let [name , setName] = useState()
    let [id , setId] = useState()
    let [company, setCompany] = useState('')
    let [email, setEmail] = useState('')
    let [website, setWebsite] = useState('')
    let [phone, setPhone] = useState('')
    let [street, setStreet] = useState('')
    let [city, setCity] = useState('')
    

    let {userid} = useParams()
    console.log(userid);

    let navigate = useNavigate()
    
    //read the data
     
    useEffect(() => {
        axios.get(`http://localhost:8080/users/${userid}`)
        .then((res) => {
            console.log(res);
            let {data} = res
            console.log(data);
            setName(data.name)
            setId(data.id)
            setCompany(data.company)
            setEmail(data.email)
            setWebsite(data.website)
            setPhone(data.phone)
            setStreet(data.address?.street || '')
            setCity(data.address?.city || '')
        })
        
    } , [userid])

    //update the data

    let updateDate = (e) => {
        let payload = {
              id,
              name,
              company,
              email,
              website,
              phone,
              address: {
              street,
              city
              }
           }

        console.log(payload);
        
       e.preventDefault()
       axios.put(`http://localhost:8080/users/${userid}`,payload)
       .then(() => {
        console.log("data updated successfullly");
        navigate("/")
       })
       .catch(() => {
        console.log("error occured");
        
       })
    }


  return (
    <div>
         <form action="">
            name : <input type="text" name="" id="" value={name} onChange={(e) => {setName(e.target.value)}}  />
            <br /><br />
            id : <input type="tel" name="" id="" value={id} onChange={(e) => {setId(e.target.value)}} />
            <br /><br />
            company : <input type="text" name="" id="" value={company}  onChange={(e) => {setCompany(e.target.value)}}/>
            <br /><br />
             email : <input type="text" name="" id="" value={email}  onChange={(e) => {setEmail(e.target.value)}}/>
            <br /><br />
             website : <input type="text" name="" id="" value={website}  onChange={(e) => {setWebsite(e.target.value)}}/>
            <br /><br />
             phone : <input type="text" name="" id="" value={phone}  onChange={(e) => {setPhone(e.target.value)}}/>
            <br /><br />
             street : <input type="text" name="" id="" value={street}  onChange={(e) => {setStreet(e.target.value)}}/>
            <br /><br />
             city : <input type="text" name="" id="" value={city}  onChange={(e) => {setCity(e.target.value)}}/>
            <br /><br />
             
            <button onClick={updateDate}>edit</button>
         </form>
    </div>
  )
}

export default Edit