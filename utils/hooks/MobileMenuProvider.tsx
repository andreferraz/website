import React, { useState, useCallback, createContext, useContext } from 'react';

interface MobileMenuContextProps {
	openMobileMenu(): void;
	closeMobileMenu(): void;
	toggleMobileMenu(): void;
	isOpen: boolean;
}

interface MobileMenuProviderProps {
	children: React.ReactNode;
}

const MobileMenuContext = createContext<MobileMenuContextProps>({} as MobileMenuContextProps);

export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openMobileMenu = useCallback(() => {
		setIsOpen(true);
		document.body.style.overflowY = 'hidden';
	}, []);

	const closeMobileMenu = useCallback(() => {
		setIsOpen(false);
		document.body.style.overflowY = 'auto';
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setIsOpen((prevsOpen) => !prevsOpen);

		document.body.style.overflowY === 'auto'
			? (document.body.style.overflowY = 'hidden')
			: (document.body.style.overflowY = 'auto');
	}, []);

	return (
		<MobileMenuContext.Provider
			value={{ openMobileMenu, closeMobileMenu, toggleMobileMenu, isOpen }}
		>
			{children}
		</MobileMenuContext.Provider>
	);
};

export function useMobileMenu(): MobileMenuContextProps {
	const context = useContext(MobileMenuContext);

	return context;
}
