import React from 'react';
import '../App.css';


function Card({dir, dirname, lsa, coverDue, fobDue, assign}) {

    return (
        
      <div className="card-container">
           <h1>{dir}</h1> 
           <p>{dirname}</p>
           <p>LSA Code: {lsa}</p>
           <p>Cover Items Due Printer: {coverDue}</p>
           <p>FOB PAGES DUE PRINTER: {fobDue}</p>
           <p>Assignment: {assign}</p>
      </div>
    );
  }

  
  export default Card;


  