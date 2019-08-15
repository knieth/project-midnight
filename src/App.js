import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UploadForm from './Components/UploadForm';
import SearchForm from './Components/SearchForm';
import CardList from './Components/CardList';
import XLSX from 'xlsx';
//import test from './.xlsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newData: "",
      searchData: "",
      sample:""
    };
  }

  

  render(){
  
  const handleUpload = (file) => {
      //this.setState({
       // url: url
     // });
     
     //var files = e.target.files, f = files[0];
     var reader = new FileReader();
     reader.onload = function(e) {
       var data = new Uint8Array(e.target.result);
       var workbook = XLSX.read(data, {type: 'array'});
   
       /* DO SOMETHING WITH workbook HERE */
       var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
       var jsonData = XLSX.utils.sheet_to_json(first_worksheet, {raw:false,'date_format':"mm-dd-yyyy"});
       //set state to data
       newDataCopy(jsonData)
       //console.log(jsonData);
     };
     reader.readAsArrayBuffer(file);
   
      //end
    }

    const newDataCopy = (data) =>{
      this.setState({
        newData: data
      });
      //console.log(this.state.newData);
    }

    const handleSearch = (dir) =>{
      console.log(dir);
      this.setState({
        sample: dir
      });
        const filterData = this.state.newData;
        
        const filteredData = filterData.filter((obj, index) =>{
          return obj["KGen Product Code"] === dir;
          
      });

      //this.setState({
       // searchData: filteredData
      //});

      console.log(filteredData);
      
    }

    
      
    


    //console.log(this.state.searchData);
    
    
     

    return (
      <div className="App">
        <header className="App-header">
          <h1>Project Midnight {this.state.url}</h1>
          <UploadForm handleUpload={handleUpload}/>
          <SearchForm handleSearch={handleSearch}/>
          
        </header>
        
        <div>
          
          <CardList data={this.state.newData}/>
        </div>
      </div>
    );
  }
}

export default App;
