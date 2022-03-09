import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
<SectionTitle main center>Welcome to <br/>Jumbo Pere</SectionTitle>
<SectionText> I am a young web developer with than  more 3 years Experiences working with React, Express, MongoDB, CSS, HTML, and other technologies.
  Also testing and debugging, working with REST APIs and worked with other web developers. </SectionText>
    <Button onClick = {() => window.location = "https://twitter.com/jumbopere"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;