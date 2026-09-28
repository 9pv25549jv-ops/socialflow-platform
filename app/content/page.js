"use client";

import { useState } from "react";

export default function ContentPage() {
  const [platform, setPlatform] = useState("Instagram");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);

  function addPost() {
    if (!content.trim()) return;

    setPosts([
      ...posts,
      {
        id: Date.now(),
        platform,
        content,
        status: "Draft",
      },
    ]);

    setContent("");
  }

  return (
    <main style={{ padding: "32px", maxWidth: "1100px", margin: "auto" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}>
          Content
        </h1>
        <p style={{ color: "#666" }}>
          Create, organize and manage your social media content.
        </p>
      </div>

      <section
        style={{
          background: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
          Create a post
        </h2>

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
          Platform
        </label>

        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginBottom: "20px",
          }}
        >
          <option>Instagram</option>
          <option>TikTok</option>
          <option>Facebook</option>
          <option>Twitter / X</option>
          <option>LinkedIn</option>
        </select>

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>
          Post content
        </label>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your social media post..."
          rows={6}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            resize: "vertical",
            marginBottom: "16px",
            fontSize: "15px",
          }}
        />

        <button
          onClick={addPost}
          style={{
            background: "#111",
            color: "#fff",
            border: "none",
            padding: "12px 22px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Add to content
        </button>
      </section>

      <section>
        <h2 style={{ fontSize: "22px", marginBottom: "18px" }}>
          Content library
        </h2>

        {posts.length === 0 ? (
          <div
            style={{
              border: "1px dashed #ccc",
              borderRadius: "16px",
              padding: "40px",
              textAlign: "center",
              color: "#777",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "8px" }}>
              No content yet
            </p>
            <p>Create your first social media post above.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gap: "16px" }}>
            {posts.map((post) => (
              <div
                key={post.id}
                style={{
                  border: "1px solid #e5e5e5",
                  borderRadius: "14px",
                  padding: "20px",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <strong>{post.platform}</strong>
                  <span style={{ color: "#777" }}>{post.status}</span>
                </div>

                <p style={{ lineHeight: "1.6" }}>{post.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
