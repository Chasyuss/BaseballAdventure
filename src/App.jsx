import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Join from './pages/Join';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;