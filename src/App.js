import React from 'react';
import './App.css';
import Nav from './components/nav';
import UserInfoCard from './components/UserInfoCard';
import styled from 'styled-components'
import EditProfile from './components/EditProfile';

const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`


function App() {
  return (
    <AppContainer>
      <div className="App">
        <UserInfoCard />
        <EditProfile />
      </div>
    </AppContainer>
  );
}

export default App;
