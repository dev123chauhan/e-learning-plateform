import  { useState } from 'react';

const FirstAssignment = () => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (code.includes('<html>') && code.includes('<body>') && code.includes('</html>')) {
      setFeedback({ type: 'success', message: 'Great job! Your HTML structure looks correct.' });
    } else {
      setFeedback({ type: 'error', message: 'Oops! Make sure you have the basic HTML structure in place.' });
    }
  };

  return (
    <div style={{ margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>HTML Structure Assignment</h2>
      <p style={{ marginBottom: '20px' }}>
        Create a basic HTML structure including <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code> tags.
      </p>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            width: '100%',
            height: '200px',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          placeholder="Enter your HTML code here..."
        />
        <button 
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>

      {feedback && (
        <div 
          style={{
            marginTop: '20px',
            padding: '10px',
            borderRadius: '4px',
            backgroundColor: feedback.type === 'success' ? '#d4edda' : '#f8d7da',
            color: feedback.type === 'success' ? '#155724' : '#721c24'
          }}
        >
          <p>{feedback.message}</p>
        </div>
      )}
    </div>
  );
};

export default FirstAssignment;