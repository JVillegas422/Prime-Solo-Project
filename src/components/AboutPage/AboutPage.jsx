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
          <p>FDA Prescription Drug API</p>
          <p>React</p>
          <p>Redux</p>
          <p>Redux-Sagas</p>
          <p>Material UI</p>
          <p>Passport</p>
          <p>Postgresql</p>
          <p>Axios</p>
          <p>Express</p>
          <p>Dayjs</p>
          <p>Sweet Alert2</p>
        </div>
        <div>
          <h3>Future add ons:</h3>
          <p>Ability to set alarms and/or add text notifications.</p>
          <p>Add additional search parameters to FDA API search.</p>
        </div>
      </Card>
    </Container>
    </>
  );
}

export default AboutPage;
