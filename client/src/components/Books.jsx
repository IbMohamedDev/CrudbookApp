import React, { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import axios from 'axios'

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
              const res = await axios.get('http://localhost:8000/books') 
              setBooks(res.data)
              console.log(res)  
            } catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])


    
    return (
        <div>
      
            <h1>BOOKS.COM</h1>
            <div className="books">
            {books.map(book => ( 
            <div className="book" key={book.id}> 
                {book.cover && <img src={book.cover} alt=""></img>}
                <h2>{book.title}</h2>
                <p>{book.desc}</p>
                <span>{book.price}</span>
                <div className="button">
                <button className="update">Update</button>
                <button className="delete">Delete</button>
                </div>
            </div>
            ))}
        </div>
        <button> 
        <Link to={"/add"}>Add new book </Link>
        </button>
       </div> 
    )
}


export default Books