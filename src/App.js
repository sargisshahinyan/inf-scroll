import { useState } from 'react';

import './App.scss';

const randomString = () => {
  return Math.random().toString(35).split('.')[1];
};

function App() {
  const [items, setItems] = useState(() => Array(30).fill(null).map(() => randomString()));

  return (
    <div className="App">
      {items.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
      ))}
    </div>
  );
}

export default App;
