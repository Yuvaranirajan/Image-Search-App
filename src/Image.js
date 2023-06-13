import { useEffect, useState } from 'react';
import './imageStyle.css';
import {CgProfile} from 'react-icons/cg';
import "bootstrap/dist/css/bootstrap.css";
export default function Image(){
    const[img,setImg]=useState("Flower");
    const[data,setData]=useState([]);
    const Access_Key = "IbdRrBmP-suF2bfyoYHnakuAG36Ae1T2fTRBp1nzIjU";
    const Submit=()=>{
        apiCall();
    }
    const handleKey=(e)=>{
        if(e.keyCode ===13){
            apiCall();
        }
    }
    const apiCall=()=>{
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&per_page=28`)
        .then(response=>{
            // {console.log(response.json());}
            return response.json();
            
        })
        .then(res=>{
                setData(res.results);
                {console.log(data)}
            }
        )
}
    useEffect(()=>{
        apiCall();
    },[]);
    return(
        <div className="Image-container container-fluid"> 
           <div className="home-container">
                <div className="header">
                    <h2>Images</h2>
                    <a href='#'><button><CgProfile/>Login</button></a>
                </div>
                <div className='search'>
                    <input type='text' placeholder ='Search your images here...' onChange={(e)=> setImg(e.target.value)} onKeyUp={(e)=>handleKey(e)}/>
                    <button onClick={Submit}>Search</button>
                </div>
           </div>
           <div className='Img-content'>
             <h1 className='title p-2 pt-5'>{img}{" "} Images</h1> 
             <p>Here are some beautiful images.Search your images by the image name</p>
             <div className='Imgcontainer d-flex justify-content-evenly flex-wrap col-12'>
                {/* {console.log(data)}; */}
             {data.map((item,index)=>{
                    return (<img key={index} src={item.urls.small} alt={item.alt_description} className='col-lg-3 col-sm-12 col-md-6 p-2'/>);
               })}
               </div>
           </div>
           <div className='footer'>
            <div className='footer-content'>
                <p>Contact us</p>
                <p>Help</p>
                <p>Terms and Conditions</p>
                <p>Image and photo search</p>
                <p>Notifications</p>
                <p>Privacy policy</p>
            </div>
           </div>
        </div>
    );
}