import React, { useContext } from 'react';

const Context = React.createContext(null);

export const useAppContext = () => {
	const data = useContext(Context)
	if(!data) {
		throw new Error('Вы не подписаны на провайдер')
	}
	return data;
}

export const MyProvider = Context.Provider;
