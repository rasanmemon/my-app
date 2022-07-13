import React, { useState,useEffect } from "react";
import axios from "axios";

const Questions = ()=> {
    // console.log('Im Superman');
    const [database,setdatabase] = useState({});
    const mystyle={
        margin: "0 0 0 200px"
    }
    useEffect( () => {
        const conn = async() => {
        try {
            await axios.get("http://localhost:8080/getQuestions")
          .then((responce) => {
            if (responce.data.length > 0) {
             setdatabase([...responce.data])
             console.log(database);
            //  console.log(qdata)
            //   setloading(true);
          }
             else {
              console.log("Question Fetch Failed")
             }
            })
        } catch (error) {
          console.error(error)
        }}
        conn()
      },[]);
    return (
    <div class="w3-container w3-display-container" style={mystyle}  >
     {/* {Object.entries(database).map(([key, value]) => {
        return (
            <div>
                {key} = {value}
            </div>
        );
    })} */}
    
    </div>
       
    );
  }
  
  export default Questions;