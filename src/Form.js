import React from 'react'
import './Formstyle.css' ;

function Form
() {
  return (
    <div id="fm">
<form action="#" method="post" class="basic-form">
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname" required />

    <label for="lname">Last Name:</label>
    <input type="text" id="lname" name="lname" required />

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    
        <label for="dept">department</label>
    <input type="text" required />

      <label for="dept">contact no</label>
    <input type="text" required />

    <input type="submit" value="Submit" />
  </form>
    </div>
  )
}

export default  Form ;

  
  

