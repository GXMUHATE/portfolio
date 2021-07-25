import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Graçane Muhate Portfolio
        </SectionTitle>
        <SectionText>
        This is a space where I expose some of my main projects and career achievements. I hope you like and identify your needs here...
        </SectionText>
        
        <Button onClick={() => window.location ='https://github.com/GXMUHATE'} >Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;