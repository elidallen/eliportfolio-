import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hello there! Welcome to my portfolio. My name is Eli Allen-Mitchell, and I am a passionate and motivated Software Developer with a thirst for innovation and a love for problem-solving. I'm thrilled to showcase my journey into the exciting world of software development.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:aeli74@yahoo.com'}>Email Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;