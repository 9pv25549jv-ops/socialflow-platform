"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
const [showCreatePost, setShowCreatePost] = useState(false);
const [postText, setPostText] = useState("");

const publishPost = () => {
if (!postText.trim()) return;

alert("Post created successfully!");
setPostText("");
setShowCreatePost(false);

};

return (
Social Flow

    <nav>
      <a className="active">Dashboard</a>
      <a>Content</a>
      <a>Calendar</a>
      <a>Analytics</a>
      <a>Accounts</a>
      <a>Settings</a>
    </nav>
  </aside>
  <section className="content">
    <header className="topbar">
      <div>
        <h1>Dashboard</h1>
        <p>Manage your social media from one place.</p>
      </div>
      <button
        className="create-button"
        onClick={() => setShowCreatePost(true)}
      >
        + Create Post
      </button>
    </header>
    <div className="stats">
      <div className="card">
        <span>Total Posts</span>
        <strong>128</strong>
      </div>
      <div className="card">
        <span>Scheduled</span>
        <strong>24</strong>
      </div>
      <div className="card">
        <span>Engagement</span>
        <strong>18.7K</strong>
      </div>
      <div className="card">
        <span>Followers</span>
        <strong>42.5K</strong>
      </div>
    </div>
    <div className="section">
      <div className="section-header">
        <h2>Recent Posts</h2>
        <button>View all</button>
      </div>
      <div className="posts">
        <div className="post">
          <div>
            <strong>Instagram</strong>
            <p>New collection dropping soon...</p>
          </div>
          <span>Published</span>
        </div>
        <div className="post">
          <div>
            <strong>TikTok</strong>
            <p>Behind the scenes of our latest shoot.</p>
          </div>
          <span>Scheduled</span>
        </div>
        <div className="post">
          <div>
            <strong>Facebook</strong>
            <p>Check out our latest updates.</p>
          </div>
          <span>Draft</span>
        </div>
      </div>
    </div>
  </section>
  {showCreatePost && (
    <div
      className="modal-overlay"
      onClick={() => setShowCreatePost(false)}
    >
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Create Post</h2>
          <button
            className="close-button"
            onClick={() => setShowCreatePost(false)}
          >
            ×
          </button>
        </div>
        <textarea
          className="post-input"
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
          placeholder="What do you want to post?"
        />
        <div className="modal-actions">
          <button
            className="cancel-button"
            onClick={() => {
              setPostText("");
              setShowCreatePost(false);
            }}
          >
            Cancel
          </button>
          <button
            className="publish-button"
            onClick={publishPost}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  )}
</main>

);
}
