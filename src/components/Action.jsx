import React from 'react'

function Action() {
const message=()=>{
alert("submitted sucessfully");
}
  return <>
   <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control validationDefault03" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
      <button onClick={message} type="submit" className="btn btn-primary">Submit</button>
</form>
  </>
}
export default Action