import {useState} from 'react'
import BlogItem from './BlogItem'

export default function Home() {

    const [blogs,setBlogs] = useState(
    [{title : 'My new website' , body :'lorem ipsum ..' , author : 'mario' , id :1},
    {title : 'Welcome !' , body :'lorem ipsum ..' , author : 'yoshi' , id :2},
    {title : 'Web dev top tips ' , body :'lorem ipsum ..' , author : 'mario' , id :3}
    ])

    const DeleteBlog = (id) => {
    const newBlogs = blogs.filter(el => el.id !== id);
    setBlogs(newBlogs);
    } 

    

    return (
    <div>
 <BlogItem ListOfBlogs={blogs}
  MainTitle="All blogs !" 
  RemoveBlog={DeleteBlog}  />
    </div>
  )
}
