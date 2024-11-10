import React from 'react';
import './App.scss';
import MainContainer from '../components/MainContainer';
import Header from '../components/Header';
import Search from '../components/Search';

function App() {
    return (
        <MainContainer>
            <Header header="Titanic passengers" />
            <Search />
        </MainContainer>
    );
}

export default App;
