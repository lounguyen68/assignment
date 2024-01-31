import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
    })
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, [])
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2>Test Assignment FE</h2>
      <ul>
        {posts.map((post) => 
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Home;