import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Join from './pages/Join';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/join' element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;