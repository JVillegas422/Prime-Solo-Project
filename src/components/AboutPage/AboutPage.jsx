import React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
    <Container>
      <Card className='myBox' sx={{ bgcolor: '#def6fd' }}>
        <div>
          <h2>Special Thanks to:</h2>
          <p>Prime Digital Academy, Edan, and Ramirez Cohort.</p>
          <p>My wife Kelsey, and my daughters Bella and Lily</p>
        </div>
        <div>
          <h3>Technologies used:</h3>
          <p>React</p>
          <p>Redux</p>
          <p>Redux-Sagas</p>
          <p>MUI</p>
          <p>Passport</p>
          <p>Postgresql</p>
          <p>Axios</p>
          <p>Express</p>
          <p>FDA Prescription Drugs API</p>
        </div>
      </Card>
    </Container>
    </>
  );
}

export default AboutPage;
