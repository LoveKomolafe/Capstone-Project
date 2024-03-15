import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDown = () => {
    const [markdown, setMarkdown] = useState('');
    
    const handleEditorChange = (event) => {
        setMarkdown(event.target.value.toString());
    };

    return (
        <div>
            <ReactMarkdown value={markdown} onChange={handleEditorChange}></ReactMarkdown>
        </div>
    );
};

export default MarkDown;