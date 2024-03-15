import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import "../../assets/Styles/AdminStyles/adminDashboard.css"

const AdminDashboard = () => {
    const [markdown, setMarkdown] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleChange = (e) => {
    setMarkdiwn(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted markdown:", markdown)
  }

  const insertTextAtCursor = (text, startTag, endTag) => {
    const textarea = document.getElementById("description");
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const textBefore = markdown.substring(0, startPos);
    const textAfter = markdown.substring(endPos, markdown.length);
    const updatedText = `${textBefore}${startTag}${text}${endTag}${textAfter}`
    setMarkdown(updatedText);
  };

  const handleBoldInsert = () => {
    insertTextAtCursor("bold text", "**", "**");
  };

  const handleStrikeThroughText = () => {
    insertTextAtCursor("~~strikethrough text~~", "~~", "~~")
  };

  const handleItalicInsert = () => {
    insertTextAtCursor("_italic text_", "_", "_")
  }

  const handleLinkInsert = () => {
    const url = prompt("Enter URL:");
    if (url) {
        const text = prompt("Enter link text:") || "Link";
        insertTextAtCursor(`[${text}](${url})`);
    }
  };

  const handleImageInsert = () => {
    const url = prompt("Enter image URL:");
    if (url) {
        const altText = prompt("Enter alt text:") || "Image";
        insertTextAtCursor(`![${altText}](${url})`);
    }
  };


  return (
    <div>
      <header>
        <div className="container">
            <div className="logo">C A R E F I N D E R</div>
            <Link to="/logout">Logout</Link>
            <div className="profile-dropdown">
            <button
              type="button"
              className="profile-button"
              onClick={toggleDropdown}
            >
              <img src="https://picsum.photos/50" alt="Profile" />
            </button>
          </div>
        </div>
      </header>
        
        <main>
            <div>
                <h2>Create Hospital Entry</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="hospitalName">Hospital Name:</label>
                        <br />
                        <input type="text" id="hospitalName" name="hospitalName" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <br /> 
                        <input type="text" id="address" name="address" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <div className="markdown-editor">
                            <textarea 
                                id="description"
                                name="description"
                                value={markdown}
                                onChange={(e) => setMarkdown(e.target.value)}
                                rows={10}
                                cols={10}
                            />

                            <div className="markdown-toolbar">
                                <button onClick={handleBoldInsert}>Bold</button>
                                <button onClick={handleItalicInsert}>Italic</button>
                                <button onClick={handleStrikeThroughText}>Strikethrough</button>
                                <button onClick={() => handleLinkInsert()}>Insert Link</button>
                                <button onClick={() => handleImageInsert()}>Insert Image</button>
                            </div>
                        </div>
                        <br />  
                        <div className="markdown-preview">
                            <ReactMarkdown>{markdown}</ReactMarkdown>
                        </div>
                    </div>

                    <div className="markdown-toolbar">
                        <button type="submit">Create Entry</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
  );
};

export default AdminDashboard;