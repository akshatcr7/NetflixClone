import React from 'react';
import './App.css';
import Row from './components/Row';

function App() {
    return (
        <div className="App">
            <Row title="NETFLIX ORIGINALS"/>
            <Row title="Trending Now"/>
            <Row title="Top Rated"/>
        </div>
    );
}

export default App;
