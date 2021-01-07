import React from 'react';
import { IContext } from './typescript-stuff/interfaces';

const Context = React.createContext<IContext | null>(null);

export default Context;
