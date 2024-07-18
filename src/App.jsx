// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  

  return (
    <div>
      <h1>Upload Files Using Cloudinary Service</h1>
      <Link to="/">Home</Link> | <Link to="upload">Upload</Link> | <Link to="secure-upload">Secure Upload</Link>
      <br/>
      <br/>
      <Outlet/>
    </div>
  );
};

export default App;


// SC Token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIwMDkwMTU4LCJleHAiOjE3MjI2ODIxNTh9.NL-oPlt1jbil_2RB0odzPEoXC7mludh-CRUqmTi8fxE
// SA Token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIwMDg2NzIzLCJleHAiOjE3MjI2Nzg3MjN9.WYirJke9Zz-c-JENRDGa9L_v8iE0rr79BJ1-mqHa9rs

      // {
      //   username: "user1",
      //   password: "password1",
      //   email: "user1@example.com",
      //   confirmed: true,
      //   blocked: false,
      //   role: "SC",
      // }
      // {
      //   "username": "user2",
      //   "password": "password2",
      //   "email": "user2@example.com",
      //   "confirmed": true,
      //   "blocked": false,
      //   "role": "SA"
      // },
      // {
      //   "username": "user3",
      //   "password": "password3",
      //   "email": "user3@example.com",
      //   "confirmed": true,
      //   "blocked": false,
      //   "role": "MAR"
      // },
      // {
      //   "username": "user4",
      //   "password": "password4",
      //   "email": "user4@example.com",
      //   "confirmed": true,
      //   "blocked": false,
      //   "role": "MASTER"
      // },
      // {
      //   "username": "user5",
      //   "password": "password5",
      //   "email": "user5@example.com",
      //   "confirmed": true,
      //   "blocked": false,
      //   "role": "OEM"
      // },
      // {
      //   "username": "user6",
      //   "password": "password6",
      //   "email": "user6@example.com",
      //   "confirmed": true,
      //   "blocked": false,
      //   "role": "GST"
      // }