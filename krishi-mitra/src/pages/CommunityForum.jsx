import { useState } from "react";
import "./CommunityForum.css";

export default function CommunityForum() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      farmer: "Ramesh (Thrissur)",
      content: "My paddy leaves are turning yellow. Any advice?",
      replies: ["Try using urea spray lightly.", "Check water levels in the field."],
    },
    {
      id: 2,
      farmer: "Lakshmi (Palakkad)",
      content: "Which fertilizer is best for banana crops in September?",
      replies: ["DAP mixed with organic compost works well.", "Consult local Krishi Bhavan for subsidy fertilizers."],
    },
    {
      id: 3,
      farmer: "Suresh (Alappuzha)",
      content: "Anyone tried organic pest control for coconut?",
      replies: ["Neem oil spray works well.", "Use cow dung solution weekly."],
    },
  ]);

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const newEntry = {
      id: posts.length + 1,
      farmer: "You",
      content: newPost,
      replies: [],
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  return (
    <div className="forum-screen">
      <div className="overlay">
        <h1 className="forum-title">👨‍🌾 Community Forum 🌾</h1>
        <p className="forum-subtitle">
          Share your farming problems & tips. Farmers helping farmers!
        </p>

        <div className="post-box">
          <textarea
            placeholder="✍️ Write your question or tip..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button onClick={handlePost}>Post</button>
        </div>

        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3>{post.farmer}</h3>
              <p>{post.content}</p>
              <div className="replies">
                <h4>💬 Replies:</h4>
                {post.replies.length > 0 ? (
                  post.replies.map((reply, i) => (
                    <p key={i} className="reply">➡️ {reply}</p>
                  ))
                ) : (
                  <p className="no-reply">No replies yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
