import React, { createContext } from 'react';

export const ConfigContext = createContext({});

export const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);
