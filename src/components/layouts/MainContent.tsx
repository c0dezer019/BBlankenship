import { FC, ReactElement } from 'react';
import { Content } from '../atoms';
import { SectionOne, SectionTwo } from '../molecules';

const MainContent: FC = (): ReactElement => (
  <Content>
    <SectionOne />
    <SectionTwo />
  </Content>
);

export default MainContent;
