import React, {useState, useEffect} from "react";
import '../App.css';
import { Link } from 'react-router-dom';

function Search() {
 const [searchTerm, setSearchTerm] = useState("");
 const [searchResults, setSearchResults] = useState([]);
 const [checkedResults, setCheckedResults] = useState([]);

 const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 const handleChecked = event => {
    if(event.target.checked === true){
      setCheckedResults([...checkedResults, event.target.value]);
    }
    if(event.target.checked === false){
      var index = checkedResults.indexOf(event.target.value);
      if(index !== -1) setCheckedResults([...checkedResults.slice(0,index), ...checkedResults.slice(index+1)]);
    }
 };
 useEffect(() => {
  fetch('http://www.mocky.io/v2/5e3415ce3000008900d962b1/')
    .then(results => results.json())
    .then(data => {
    //  console.log(data.content[0].fund_name);
      const funds = data.content.filter(fund =>
        fund.fund_name.toLowerCase().includes(searchTerm)
      );
      setSearchResults(funds);
    });
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul style={{display : 'flex', flexWrap:'wrap'}}>
         {searchResults.map((fund, index) => (
          <li key={index}><div className="Card">
                <span>{fund.fund_name}</span><br/>
                <span>{fund.category}</span><br/>
                <span>{fund.return1y}</span><br/>
                <input type="checkbox" onChange={handleChecked} value={fund.fund_name}/>
                </div></li>
        ))}
      </ul>
      <Link id="fixedbutton" to={{ pathname: "/allocateFund",state: { funds: checkedResults }}}>Next</Link>
    </div>
  );
}

export default Search
