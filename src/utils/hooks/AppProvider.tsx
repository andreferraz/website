import React from 'react';
import { MobileMenuProvider } from './MobileMenuProvider';

export const AppProvider: React.FC = ({ children }) => {
	return <MobileMenuProvider>{children}</MobileMenuProvider>;
};
