import { FC, ReactElement } from 'react';

import About from './About';
import Section from '../atoms/Section';

const SectionTwo: FC = (): ReactElement => (
  <Section>
    <About />
  </Section>
);

export default SectionTwo;
