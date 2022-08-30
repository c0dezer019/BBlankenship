import { FC, ReactElement } from 'react';

import Content from '../atoms/Content';
import SectionOne from '../molecules/SectionOne';
import SectionTwo from '../molecules/SectionTwo';

const MainContent: FC = (): ReactElement => (
  <Content>
    <SectionOne />
    <SectionTwo />
  </Content>
);

export default MainContent;
