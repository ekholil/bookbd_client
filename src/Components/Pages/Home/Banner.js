import React from 'react';
import bannerImg from './img/book_banner.jpg'
const Banner = () => {
    
    return (
        <div style={{backgroundImage:`url(${bannerImg})`, backgroundSize:'cover', marginTop:'40px', height:'140vh', display:'flex', justifyContent:'center', alignItems: 'center'}}>
           <div className='d-flex flex-column align-items-center'>
               <h1 style={{fontSize:'4rem'}}>Explore The World of Knowledge</h1>
               <button style={{padding:'10px 20px', border:'none', backgroundColor:'#2C3E50', color: '#fff'}}>Exlore Books</button>
           </div>
        </div>
    );
};

export default Banner;