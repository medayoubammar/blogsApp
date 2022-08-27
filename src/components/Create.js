import React, { useState } from 'react'
import './Create.css';


export default function Create() {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [author,setAuthor] = useState('author1');
   console.log(title)
    return (
    <div className='create'>
        <form>
            <h2>Add a new Blog</h2>
            <label>Blog Title : </label>
            <input type="text"
             onChange={(e)=>setTitle(e.target.value)} />
            <label>Blog content : </label>
            <textarea
             onChange={(e)=>setContent(e.target.value)}>
                </textarea>
                <label>Blog author : </label>
                <select
                 onChange={(e)=>setAuthor(e.target.value)}>
                    <option>author 1</option>
                    <option>author 2</option>
                </select>
                <button>Add Blog</button>
        </form>
        <div>
         <h2>Final Result :</h2>
         <fieldset>
            <legend>
                TITLE : {title}
            </legend>
            <p> BODY : {content} </p>
            <p>Written By : {author}</p>
         </fieldset>
        </div>
    </div>
  )
}
