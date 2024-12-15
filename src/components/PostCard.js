import React from "react";
import "./PostCard.css";

function PostCard({ post }) {
  const groups = ["Leisure", "Activism", "MBA", "Philosophy"];
  return (
    <div className="cont2">
      <div className="post-card">
        <img src={post.image} alt={post.title} className="post-image" />
        <div className="post-content">
          <p className="post-type">✍️ {post.type}</p>
          <h2 className="post-title">{post.title}</h2>
          <p className="post-author">By {post.author}</p>
          <div className="post-footer">
            <span>{post.views} views</span>
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>
      <div className="recommended-groups">
        <h3>Recommended Groups</h3>
        {groups.map((group, index) => (
          <div key={index} className="group">
            <span>{group}</span>
            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
