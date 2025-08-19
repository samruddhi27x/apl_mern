
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nv1 from './Nv1';
import myImage from './imges/dyp1.jpeg'
import Clubs from './Clubs';

function App() {
  return (
  <div>
<Nv1/>

<img src={myImage}
style={{ 
        width: '90%', 
        height: 'auto', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',  
        margin: '20px  '  ,       
        display:' flex    '   ,  
        alignItems : 'center',
        overflow: 'hidden' ,
        alignContent:'center',
        justifyContent : 'center',
 
      }}
       alt="Description"
        />
 <Clubs/>

</div>

  );
}

export default App;


