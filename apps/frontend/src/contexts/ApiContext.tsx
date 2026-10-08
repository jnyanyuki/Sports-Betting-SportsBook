import React, { createContext } from 'react'; export const APIContext = createContext({}); export const APIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
