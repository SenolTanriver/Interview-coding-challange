import React, { useState } from 'react';

const Comments = ({ postId }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);

//onclick ile id dinlendi ve fetch data ile name ve comment getildi.

  const loadComments = () => {
    setLoading(true);
    fetch(`http://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };


// buttona disabled fonksiyonu verildi. loading state ini dinleyerek yorumlar gelene kadar çalışır
  return (
    <div className="comments-container">
      <button onClick={loadComments} disabled={loading}>
        {loading ? 'Loading...' : 'Load Comments'}
      </button>

      <p>Comments</p>
    
      <div className="comments">
          {comments.map(comment => (
            <div key={comment.id}>
              <p>Name: {comment.name}</p>
              <p>Comment: {comment.body}</p>
            </div>
          ))}
        </div>
   
    </div>
  );
};

export default Comments;
