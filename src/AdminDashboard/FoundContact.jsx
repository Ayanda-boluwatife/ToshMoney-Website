import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {useParams} from "react-router-dom";


const FoundContact = () => {
    const [userData, setUserData] = useState({});
    const {id} = useParams()
    const getSingleContacts = async()=>{
        const respons = await fetch(`https://toshapi.onrender.com/api/v1/contacts/${id}`, {
            mode: "cors"
        })
        .then(res => res.json())
        console.log(respons);
        setUserData(respons)
    }
    
    useEffect(()=>{
        getSingleContacts()
        // eslint-disable-next-line 
    },[]);

    if (!userData){
        return <li>Loading ..</li>
    }
  return (
    <Wrapper>
        <div className='main'>
        <h2>New Message from {userData.full_name}</h2>
                <h4>Name: {userData.full_name}</h4>
                <p>Email: {userData.email}</p>
                <p>Service: {userData.service}</p>
                <p>Budget: {userData.budget}</p>
                <p>Phone Number: {userData.phone_number}</p>
                <p>WhatsApp: <a href={`https://wa.me/234${userData.whatsapp_number}`}>{userData.whatsapp_number}</a></p>
                <p>Description: {userData.message}</p>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .main{
        height:100vh;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:20px;
        justify-content:center;
        
    }
    
`

export default FoundContact