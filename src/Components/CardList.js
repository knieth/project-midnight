import React from 'react';
import '../App.css';
import Card from './Card';

function CardList({data}) {

    

    data = Array.from(data);
    console.log('cardlist',data);
    const cardComponent = data.map((obj, index) =>{
        return <Card
        key={index}  
        dir={data[index]['KGen Product Code']} 
        dirname={data[index]['Product Name']}
        lsa={data[index]['LSA Code']}
        coverDue={data[index]['Cover Items Due Printer']}
        fobDue={data[index]['FOB PAGES DUE PRINTER']}
        assign={data[index]['Assignment']}
        />
    });

    return (
        
      <div className="cardlist-container">
           {cardComponent}
      </div>
    );
  }

  
  export default CardList;