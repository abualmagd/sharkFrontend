
import React  from 'react';
import SideBar from './SideBar';
import Home  from './Home';
export default function DashBoard(){

    return(
        <div className='Wrapper' style={{display:"flex",color:"red",gap:"10px"}}>
            <SideBar></SideBar>
            <Home/>
            <div>right post part </div>
        </div>
    );

}

