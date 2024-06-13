import React from 'react';
import { loremIpsum } from 'lorem-ipsum';

interface BuildPageProps {
  index: number;
}

const BuildPage: React.FC<BuildPageProps> = ({ index }) => (
  <>
    <h3>Page {index}</h3>
    <div>
      Page {index} content: {loremIpsum({ count: 5 })}
    </div>
  </>
);

export const PageOne: React.FC = () => <BuildPage index={1} />;
export const PageTwo: React.FC = () => <BuildPage index={2} />;
