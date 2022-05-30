import { FC, ReactElement } from 'react';

import { MouseContainer, MouseWheel } from '../../atoms/scrollAnimation';

const Mouse: FC = (): ReactElement => (
  <MouseContainer>
    <MouseWheel />
  </MouseContainer>
);

export default Mouse;