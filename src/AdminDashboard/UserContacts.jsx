import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const UserContacts = () => {
    const [userData, setUserData] = useState([{}]);
    const getAllContacts = async()=>{
        const respons = await fetch("https://toshapi.onrender.com/api/v1/contacts/", {
            mode: "cors"
        })
        .then(res => res.json())
        console.log(respons);
        setUserData(respons.reverse())
    }
    useEffect(()=>{
        getAllContacts()
    },[]);

    if (!userData){
        return <li>Loading ..</li>
    }
  return (
    <Wrapper>
        <div>
            <h2>Contact Notification</h2>
            <div className='dflex'>
                {
                    userData && (userData.map((userD, index)=>{
                        return(
                            <div key={index} className='user'>
                                <div>
                                    <h2>{userD.full_name}</h2>
                                    <p>{userD.email}</p>
                                </div>
                                <p>{userD.createdAt}</p>
                                <a href={`contacts/${userD._id}`}><button>View Message</button></a>
                            </div>
                        )
                    }))
                }
            </div>
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
    .dflex{
        display:flex;
        flex-wrap:wrap;
        width:100%;
        justify-content:center;
    }

    .user{
        width:25%;
        padding:10px 25px;
        border:2px solid black;
        display:flex;
        justify-content:space-between;
    }

    .user button{
        padding:2px 10px;
        cursor: pointer;
    }

    @media screen and (max-width:950px) {
        .user{
            width:100%;
        }
    }
`

export default UserContacts