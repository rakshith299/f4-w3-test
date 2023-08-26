import React, {useState} from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import DisplayBooks from "./Components/DisplayBooks";
import SearchResults from "./Components/SearchResults";
import BookDetails from "./Components/BookDetails";


const App = () => {
  const [resultForSearch, setResultForSearch] = useState([]);
  const [clickedBook, setClickedBook] = useState(null);

  console.log("result for search ", resultForSearch);


  return(
    <div>
      
        <Navbar setResultForSearch = {setResultForSearch} setClickedBook = {setClickedBook}/>
        {
          clickedBook !== null ? <BookDetails clickedBook = {clickedBook}/> : ""
        }


        {
          resultForSearch.length > 0? <SearchResults resultForSearch = {resultForSearch} setClickedBook = {setClickedBook}/> :  ""
        }
        <DisplayBooks setClickedBook = {setClickedBook}/>
        
    </div>
  )
}

export default App;