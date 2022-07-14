import React, { useState,useEffect }  from "react";
import axios from "axios";

const Questions = ()=> {
    // console.log('Im Superman');
    const [data,setData] = useState([]);
    const [loading, setloading] = useState(false);
    const mystyle={
        margin: "0 0 0 200px"
    }
    const getData = () => {
      axios
      .get('http://localhost:8080/getQuestions')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    useEffect( () => {
      if(data && data.length === 0){
        getData();
      }
    },[]);

     
    return (
    <div class="w3-container w3-display-container" style={mystyle} >
      <div className="">
      <div className="login-form">

     <ul>
     {
       data.map((dt,index)=>{
         // return <li>{}</li>
         return <li>{dt.Qno + ": "+ dt.Questions}</li>
        })
      }
     </ul>         
      </div>
      </div>
    </div>
       
    );
  }
  
  export default Questions;