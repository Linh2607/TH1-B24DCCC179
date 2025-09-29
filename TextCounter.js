import React, { useState } from 'react';

function TextCounter() {
  const [text, setText] = useState('');

  const maxChars = 100;

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length <= maxChars) {
      setText(input);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập văn bản ở đây..."
        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '8px', fontSize: '14px' }}>
        <span>Số ký tự đã nhập: {text.length}</span>
        {text.length === maxChars && (
          <span style={{ color: 'red', marginLeft: '10px' }}>
            Đã đạt giới hạn 100 ký tự!
          </span>
        )}
      </div>
    </div>
  );
}

export default TextCounter;
