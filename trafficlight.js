import React, { useState, useEffect, useRef } from 'react';

const colors = ['red', 'green', 'yellow'];

function TrafficLight() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const nextLight = () => {
    setActive((prev) => (prev + 1) % colors.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % colors.length);
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
          margin: '20px auto', 
          width: 100, 
          height: 250, 
          backgroundColor: '#333', 
          borderRadius: 20, 
          padding: 20,
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-around' 
        }}>
        {colors.map((color, index) => (
          <div 
            key={color}
            style={{ 
              width: 60, 
              height: 60, 
              borderRadius: '50%', 
              backgroundColor: active === index ? color : '#555', 
              margin: '0 auto',
              boxShadow: active === index ? `0 0 20px 5px ${color}` : 'none',
              transition: 'background-color 0.3s, box-shadow 0.3s'
            }}
          />
        ))}
      </div>

      <button onClick={nextLight}>Chuyển đèn</button>
    </div>
  );
}

export default TrafficLight;
