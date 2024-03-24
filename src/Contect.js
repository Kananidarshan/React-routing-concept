import React from "react";
import { useParams } from "react-router-dom";

function Contect(){
    let {mynumber}=useParams();
    return(
        <div>
            <h1>Contect</h1>
            <h1>Your Contect Number :{mynumber}</h1>
        </div>
    );
}
export default Contect;