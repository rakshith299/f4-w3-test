import React, {useState} from "react";
import ReactDOM from "react-dom";


import axios from "axios";
import "../App.css"; 

const BookDetails = ({clickedBook}) => {
    console.log("clicked book : ", clickedBook); 

    let avgRating = false;
    let ratingsCount = false;
    let publishedDate = false;
    let description = false;
    let publisher = false;

    if(clickedBook.volumeInfo.averageRating){
        avgRating = true;
    }

    if(clickedBook.volumeInfo.ratingsCount){
        ratingsCount = true;
    }

    if(clickedBook.volumeInfo.publishedDate){
        publishedDate = true;
    }

    if(clickedBook.volumeInfo.description){
        description = clickedBook.volumeInfo.description.substring(0,450) + "...";
    }

    if(clickedBook.volumeInfo.publisher){
        publisher = true;
    }
    
    return (
        <div className="whole-bg">
            <h1 className="heading">Your Book Details </h1>
            <div className="details-container">
                <img src = {clickedBook.volumeInfo.imageLinks.smallThumbnail} alt = {clickedBook.volumeInfo.title} className="clicked-book"/>
                <div className="clicked-book-details">
                    <div className="left-align">   
                        <div className="title-date-cont">
                            <h2 className="each-book-title">{clickedBook.volumeInfo.title}</h2>
                            {
                                publishedDate ? <p className="each-book-publishedon">Published on : {clickedBook.volumeInfo.publishedDate}</p> : ""
                            }
                            
                        </div>

                        <div className="auth-des-cont">
                            <p className="each-book-auth">{clickedBook.volumeInfo.authors[0]}</p>
                            {
                                description !== false? <p className="each-book-des">{description}</p> : <p className="each-book-des">In a distant land where myths intertwine with reality, young Alina discovers an ancient tome that speaks of forgotten histories. As she dives deeper into its pages, the lines between the past and present blur. Amidst swirling romances and age-old vendettas, Alina must unravel the tome's secrets before its curse consumes her very soul.</p>
                            }
                            
                        </div>
                        <div className="each-book-more-opt-cont">

                            {
                                avgRating ? <span className="each-book-span">Avg Rating : {clickedBook.volumeInfo.averageRating}</span> : ""
                            }

                            {
                                ratingsCount ? <span className="each-book-span">Ratings Count : {clickedBook.volumeInfo.ratingsCount}</span> : ""
                            }

                            {
                                publisher ? <span className="each-book-span">  Publisher : <span className="each-book-count">{clickedBook.volumeInfo.publisher}</span></span> : ""
                            }
                            
                            

                            <span className="each-book-span"> Language : <span className="each-book-count">{clickedBook.volumeInfo.language} </span></span>

                        </div>
                    </div>

                    <div className="right-align">
                        <a href = {clickedBook.volumeInfo.previewLink} target = "_blank" ><button className="each-book-btn">Read Now </button></a>
                        <a href = {clickedBook.volumeInfo.infoLink}  target = "_blank" ><button className="each-book-btn">More Info </button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetails;