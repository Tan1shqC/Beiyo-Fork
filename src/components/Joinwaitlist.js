import React from 'react'

const Joinwaitlist = () => {
  return (
<div class="box">
  <div class="container">
  
    <h3>To Join Waitlist for Our Non-Ordinary Rooms </h3>
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSedZCmRvAW-nGKSKPy3AecWuWLT5aWsozLI4WkfNqE6ENVdPw/formResponse">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="entry.2064358691" placeholder="Your name.."/>
    
        <label for="lname">Email</label>
        <input type="text" id="lname" name="entry.1584763582" placeholder="Email.."/>
    
    
        <label for="subject">Current Address</label>
        <textarea id="subject" name="entry.1741495777" placeholder="Write something.."></textarea>
    
        <label for="lname">Occupancy Needed</label>
        <input type="text" id="lname" name="entry.1913599547" placeholder="Double/Triple.."/>
    
        <label for="lname">Phone Number</label>
        <input type="text" id="lname" name="entry.2123281859" placeholder="Mobile number.."/>
    
        
        <input  onClick={linkBeiyo} type="submit" value="Submit" />
       

      </form>
      
    </div>
   
</div>
  )
}
function linkBeiyo(){
            window.location.href="/";
          }
        
export default Joinwaitlist

        