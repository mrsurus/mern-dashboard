 import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Transporter from './Transporter';
import Manufacturer from './Manufacturer';
import Login from '../Authentication/Login';
import Detailsmodal from './Detailsmodal';
 
 const Home = () => {
    const {user} = useContext(AuthContext)
    const [data, setData] = useState('')
    const [details, setDetails] = useState(null)
 
    console.log(details, 'from modal');
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res => res.json())
        .then(data =>setData(data))
    },[user])

    if(!user?.uid){
        return <Login></Login>
    }

    return (
        <div>
            {
                data?.isTransporter?
                 <Transporter
                 setDetails={setDetails}
                 ></Transporter> : 
                 <Manufacturer address={data.address}
                 ></Manufacturer>
            }
            <div>
               { details &&  <Detailsmodal details={details}></Detailsmodal>}
            </div>
        </div>
    );
 };
 
 export default Home;