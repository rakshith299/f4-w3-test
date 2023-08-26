import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

const DisplayBooks = ({setClickedBook}) => {
    const [harryBooks, setHarryBooks] = useState([]);
    const [sherlock, setSherlockBooks] = useState([]);

    useEffect(() => {

        async function fetchHomeBooks(){
            await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
            .then((res) => setHarryBooks([...res.data.items]))
            .catch((err) => console.log(err))

            await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
            .then((res) => setSherlockBooks([...res.data.items]))
            .catch((err) => console.log(err))
        }
    
    
        fetchHomeBooks()

    },[])

    


    
    return(
        <div className="whole-bg">
            <h1 className="heading">More Books</h1>
            <div  className="books-cont">  
                {
                     harryBooks.map((eachBook) =>(
                        
                        <img src = {eachBook.volumeInfo.imageLinks.smallThumbnail} 
                        alt = {eachBook.volumeInfo.authors} 
                        onClick = {() => setClickedBook(eachBook)} className="each-book"/>
                        
                     ))
                }

                {
                     sherlock.map((eachBook) =>(
                        
                        <img src = {eachBook.volumeInfo.imageLinks.smallThumbnail} 
                        alt = {eachBook.volumeInfo.authors} 
                        onClick = {() => setClickedBook(eachBook)} className="each-book"/>
                        
                     ))
                }


            </div>
        </div>
    )
}

export default DisplayBooks;