import { FC, ReactElement } from 'react';

import { MouseContainer, MouseWheel } from '../../atoms';

const Mouse: FC = (): ReactElement => (
  <MouseContainer>
    <MouseWheel />
  </MouseContainer>
);

export default Mouse;
