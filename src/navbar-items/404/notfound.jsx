import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate = useNavigate();
  const handleBack=() => {
  console.log('clicked');
  navigate(-1);
  };
  return (
    <div>
      <button 
      style={{backgroundColor:'lightblue', padding:"20px"}}
      oneClick={handleBack}
      >back
      </button>
        <img 
        src="https://avatars.mds.yandex.net/i?id=e90971ad2b716f31608eb9fd9ae3514edfb1ef33-9095279-images-thumbs&n=13" 
        alt="Notfound"
        style={{width:"100%",height:"600px"}} />
        
    </div>
  )
}

export default Notfound