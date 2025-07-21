import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Read = () => {
  const [user, setUser] = useState([]);

  useEffect(
    () => {
      getData()
    },[]
  )
  async function getData(){
    await axios.get("http://localhost:3008/get").
    then((a) => { 
      setUser(a.data)

      console.log(a.data)
    }).catch((e) => {
      console.log(e.message)
    })
  
  }
  return (
    <div>
      <h1> Show Users </h1>
      <div className="container">
        <div className="row">
          {
            user.map((i) => (
              <div className="mt-3 col-md-3">
                <div class="card" key={i._id} >
                  <img class="card-img-top" src="holder.js/100x180/" alt="Title" />
                  <div class="card-body">
                    <h4 class="card-title">{i.name}</h4>
                    <p class="card-text">{i.email}</p>
                  </div>
                </div>
                
              </div>
            ))
          }
        </div>
        </div>      
    </div>
  )
}

export default Read