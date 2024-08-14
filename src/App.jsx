import React from 'react';
import './App.css';


const comments = [
  {
    id: 1,
    username: 'amyrobson',
    time: '1 month ago',
    content: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You\'ve nailed the design and the responsiveness at various breakpoints works really well.',
    avatar: '/image-amyrobson.png',
  },
  {
    id: 2,
    username: 'maxblagun',
    time: '2 weeks ago',
    content: 'Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
    avatar: '/image-maxblagun.png',
  },

];

const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment-header">
      <img src={comment.avatar} alt="user avatar" />
      <span className="username">{comment.username}</span>
      <span className="time">{comment.time}</span>
    </div>
    <div className="comment-body">
      <p>{comment.content}</p>
    </div>
    <div className="comment-footer">
      <button className="reply">Reply</button>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="comment-section">
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};


const Vote = () => {
  const [count, setCount] = useState(12);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="vote-container">
      <button className="vote-button" onClick={increment}>+</button>
      <div className="vote-count">{count}</div>
      <button className="vote-button" onClick={decrement}>-</button>
    </div>
  );
};

export default App;