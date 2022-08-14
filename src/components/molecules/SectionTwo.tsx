import { FC, ReactElement } from 'react';

import { Section } from '../atoms';
import { About } from '.';

const SectionTwo: FC = (): ReactElement => (
  <Section>
    <About />
  </Section>
);

export default SectionTwo;
