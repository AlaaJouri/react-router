import React from 'react';
import './App.css';
import { Routes,  Route } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>

            <Route  path="/" element={<CharacterList/>} />
            <Route path="/character/:id" element={<CharacterDetail/>} />

        </Routes>
</header>
    </div>
  );
}

export default App;
