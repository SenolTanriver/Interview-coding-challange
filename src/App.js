import { useEffect, useState } from "react";
import PostTitleList from "./components/PostTitleList";
import PostContent from "./components/PostContent";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  
  // apiden fetch yöntemiyle datalar çekildi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // li de verdiğimiz onClick fonksiyonu dinlendi state yönetimi ile güncelleme
  const handleTitleClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="App">
      <PostTitleList posts={posts} onTitleClick={handleTitleClick} />
      <PostContent selectedPost={selectedPost} />
    </div>
  );
}

export default App;