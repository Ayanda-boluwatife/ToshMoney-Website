import React, { useEffect, useState } from 'react'

const UserContacts = () => {
    const [userData, setUserData] = useState([{}]);

    const getAllContacts = async()=>{
        const respons = await fetch("https://toshapi.onrender.com/api/v1/contacts", {
            mode: "cors"
        })
        .then(res => res.json())
        console.log(respons);
        setUserData(respons)
    }
    useEffect(()=>{
        getAllContacts()
    },[]);

    if (!userData){
        return <li>Loading ..</li>
    }
  return (
    <div>
        <h2>Contact Form from users!</h2>
        <div style={{display:"flex"}}>
            {
                userData && (userData.map((userD, index)=>{
                    return(
                        <div key={index}>
                            <h2>New Message from {userD.full_name}</h2>
                            <li>Full Name: {userD.full_name}</li>
                            <li>Email: {userD.email}</li>
                            <li>Phone Number: {userD.phone_number}</li>
                            <li>WhatsApp: <a href={`https://wa.me/234${userD.whatsapp_number}`}>{userD.whatsapp_number}</a></li>
                            <li>Services: {userD.service}</li>
                            <li>Budget: {userD.budget}</li>
                            <p style={{fontSize:"20px", fontWeight:700}}>Description about the project: {userD.message}</p>
                        </div>
                    )
                }))
            }
        </div>
    </div>
  )
}

export default UserContacts