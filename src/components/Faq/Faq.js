import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import initialStoreData from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={initialStoreData.faq[0].title} titleImage={initialStoreData.faq[0].image}/>
    <p>{initialStoreData.faq[0].content}</p>
  </Container>
);

export default Faq;