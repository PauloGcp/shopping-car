import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Add from './Add';
import List from './List';
import Cart from './Cart';

function PrivateRouter({children, redirectoTo}) {
	return false ? children : <Navigate to={redirectoTo} />
}

export default () => (

	<Routes>
		<Route path="list" element={<List />} />
		<Route path='add' element={<PrivateRouter redirectoTo={'/list'}><Add/></PrivateRouter>} />
		<Route path="cart" element={<Cart />} />
		<Route path="/" to="/list" />
	</Routes>
);
