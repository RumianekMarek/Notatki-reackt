import React from 'react';
import Container from '../Container/Container';
import initialStoreData from '../../data/dataStore';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={initialStoreData.info[0].title} titleImage={initialStoreData.info[0].image}/>
    <h2>{initialStoreData.info[0].title}</h2>
    <p>{initialStoreData.info[0].content}</p>
  </Container>
);

export default Info;