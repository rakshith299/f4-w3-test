import React, {useState} from "react";
import ReactDOM from "react-dom";
import {FiSearch} from "react-icons/fi";
import profilePic from "../imageStore/profilePic.jpg";
import axios from "axios";
import "../App.css";


const SearchResults = ({resultForSearch, setClickedBook}) => {
   // console.log("final result by search : ", resultForSearch)

    resultForSearch = resultForSearch.filter((each) => {
        if(each.volumeInfo.imageLinks){
            return each;
        }
    })

    //console.log("after filter : ", resultForSearch); 


    return (
        <div className="whole-bg">
            <h1 className="heading">Search results </h1>
            <div className="books-cont">   
                {

                    resultForSearch ? 
                    
                    resultForSearch.map((eachBook) => (
                        <img src = {eachBook.volumeInfo.imageLinks.smallThumbnail} 
                        alt= {eachBook.volumeInfo.authors} 
                        onClick = {() => setClickedBook(eachBook)} className="each-book"/>
                        
                    ))  : 

                    <p className="no-book-msg">Sorry Book you are searching for is not found... </p>
                    
                }
            </div>
        </div>
    )
}

export default SearchResults;