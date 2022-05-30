import { Dispatch, SetStateAction } from 'react';

export interface SProps {
  readonly isOpen: boolean;
  readonly visible: boolean;
  setInitialState: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
}