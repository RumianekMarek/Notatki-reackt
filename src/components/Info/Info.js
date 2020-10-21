import React from 'react';
import Container from '../Container/Container';
import initialStoreData from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2>{initialStoreData.info[0].title}</h2>
    <p>{initialStoreData.info[0].content}</p>
  </Container>
);

export default Info;