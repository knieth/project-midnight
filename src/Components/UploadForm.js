import React from 'react';
import '../App.css';

function UploadForm(props) {

    const getUploadValue = (e) =>{
        e.preventDefault();
        
        props.handleUpload(e.target.files[0]);
        
    }

    return (

      <div>
            <input type="file" 
                className="input-upload" 
                name="upload" 
                onChange={getUploadValue}
            />
      </div>
    );
  }

  
  export default UploadForm;