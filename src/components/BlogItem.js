
import './BlogItem.css';
export default function BlogItem({ListOfBlogs,MainTitle,RemoveBlog}) {

  return (
    <div className="blog-list" >
     
    {  ListOfBlogs.length !== 0 ? 
        <h1>{MainTitle}</h1>
        :
        <h1>No blogs left !</h1>
      }
      

        {ListOfBlogs.map((blog)=>(
        <div key={blog.id}>
       <div  className="blog-preview">
       <h1> {blog.title}</h1>
       <p> {blog.body}</p>
        <h5>Written by : {blog.author}</h5>
        <button onClick={()=>RemoveBlog(blog.id)}>X</button>

        </div>  
      
      </div>
       ))}
   </div>
  )
}
