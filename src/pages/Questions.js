import React, { useState,useEffect }  from "react";
import axios from "axios";

const Questions = ()=> {
    // console.log('Im Superman');
    let [sdatabase,setsdatabase] = useState({});
    const [loading, setloading] = useState(false);
    const mystyle={
        margin: "0 0 0 200px"
    }
    useEffect( () => {
        const conn = async() => {
          
        try {
            await axios.get("http://localhost:8080/getQuestions")
          .then((responce) => {
            if (responce.data.length > 0) {
             sdatabase=responce.data;
             console.log(...responce.data);
             //  console.log(qdata)
             setloading(true);
             console.log(sdatabase);
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