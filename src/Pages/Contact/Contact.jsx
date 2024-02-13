import {React,useState} from 'react'
import './Contact.scss'
import { useParams} from 'react-router-dom'
import {auth} from "../../firebase"
import { onAuthStateChanged} from "firebase/auth"
import { useEffect } from 'react'


const Contact = ({data}) => {
  let {id} = useParams();
  id = id-1;
  const [authUser,setAuthUser] = useState(null);
  useEffect(()=>{
    const listen = onAuthStateChanged(auth,(user)=>{
        if(user){
            setAuthUser(user);
        }
        else {
            setAuthUser(null);
        }
    });
    return () => {
        listen();
    }
},[]);

  const receiver = data[id].email;

  let from = "";
  if(authUser !== null) from = authUser.email;
  // console.log(from);

  const [subject,setSubject] = useState("");
  const [body,setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      Username:"kumarabhi2k21@gmail.com",
      Password:"453EA6E8292E460E3C1C63B57F976A45E1ED",
      Host:"smtp.elasticemail.com",
      Port:"2525",
      To : receiver,
      From : from,
      Subject : "This is the subject",
      Body : "And this is the body"
    };

    if(window.Email){
      window.Email.send(config).then(()=>alert("email sent"));
    }
  }

  // console.log(body);

  return (
    <div className='contact'>
      <h1>Contact {data[id].alt}</h1>
      <form onSubmit={submitHandler}>
        <div className='item'>
        <label for="Subject">Subject</label>
        <input type='text' id='Subject' onChange={(e)=>setSubject(e.target.value)}/>
        </div>
        <div className='item'>
        <label for="body">Message</label>
        <textarea id='body' onChange={(e)=>setBody(e.target.value)}></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact