import './App.css';
import { useState, useEffect } from 'react';

const range = 256;
function App() {
  const [breakPoints, setBreakPoints] = useState([]);
  const [colorClicked, setColorClicked] = useState();

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= range; i++) {
      if (i % 8 === 0) {
        arr[i] = i;
      }
    }
    setBreakPoints(arr);
  }, []);

  console.log(breakPoints);

  return (
    <div className="App">
      <h2>Programming challenge sent by EHG Developers! </h2>
      <div className="container">
        <div className="color-palette">
          {breakPoints.map((r) => {
            return breakPoints.map((g) => {
              return breakPoints.map((b) => {
                return (
                  <span
                    style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                    onClick={() => setColorClicked(`${r},${g},${b}`)}
                    key={`${r},${g},${b}`}
                  ></span>
                );
              });
            });
          })}
        </div>
        <h1 style={{ color: `rgb(${colorClicked})` }}>
          {' '}
          You clicked the color RGB({colorClicked})
        </h1>
      </div>
    </div>
  );
}

export default App;
