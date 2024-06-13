import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum();

const About: React.FC = () => {
  return (
    <div>
      <h1>Страничка "О нас"</h1>
      <p>У нас есть рыба!</p>
      <p>{lorem.generateParagraphs(1)}</p>
    </div>
  );
};

export default About;
