import React, { useState } from 'react'
import './create.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')

  const navigate = useNavigate()

  const create = async (e) => {
    e.preventDefault()

    const payload = {
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

    console.log('Posting payload:', payload)

    try {
      await axios.post('http://localhost:8080/users', payload)
      console.log('Data is created')
      navigate('/')
    } catch (err) {
      console.error('Error occurred:', err)
    }
  }

  return (
    <div className="container">
      <div className="form_area">
        <form onSubmit={create}>
          <div className="form_group">
            <label className="sub_title" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="form_style"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label  htmlFor="id">Id</label>
            <input
              placeholder="Enter your Id"
              type="tel"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="sub_title" htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              placeholder="Enter your Company"
              className="form_style"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="sub_title" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form_style"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="sub_title" htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              placeholder="Enter your website"
              className="form_style"
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="sub_title" htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              placeholder="Enter your phone"
              className="form_style"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="sub_title" htmlFor="street">Street</label>
            <input
              id="street"
              name="street"
              placeholder="Enter your street"
              className="form_style"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          <div className="form_group">
            <label className="sub_title" htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              placeholder="Enter your city"
              className="form_style"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Create user
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create
