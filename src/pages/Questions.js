import React, { useState } from "react";
function Questions  () {
    
    const database = {
        
          Q1: "Hello",
          Q2: "World"
        
    };
    const mystyle={
        margin: "0 0 0 200px"
    }
    return (
    <div class="w3-container w3-display-container" style={mystyle}  >
     {Object.entries(database).map(([key, value]) => {
        return (
            <div>
                {key} = {value}
            </div>
        );
    })}
    </div>
       
    );
  }
  
  export default Questions;