import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Add from './Add';
import List from './List';
import Cart from './Cart';



function PrivateRouter({children, redirectoTo}) {
	const isAuthenticate = useSelector(state => state.auth.isAuthenticate)
	return isAuthenticate ? children : <Navigate to={redirectoTo} />
}

export default () => (

	<Routes>
		<Route path="list" element={<List />} />
		<Route path='add' element={<PrivateRouter redirectoTo={'/list'}><Add/></PrivateRouter>} />
		<Route path="cart" element={<Cart />} />
		<Route path="/" to="/list" />
	</Routes>
);
