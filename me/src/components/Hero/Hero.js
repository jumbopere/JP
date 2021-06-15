import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
<SectionTitle main center>Welcome to <br/>Jumbo Pere</SectionTitle>
<SectionText> I am a young web developer</SectionText>
    <Button onClick = {() => window.location = "https://twitter.cm/jumbopere"}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;