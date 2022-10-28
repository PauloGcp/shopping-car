import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../../components/Car';
import { getAllCars } from './../../store/fetchActions/index';
import { addItem } from './../../store/ducks/cart/index';
import { showMessage, hideMessage } from '../../store/ducks/layout';

export default function List() {
	const cars = useSelector((state) => state.cars);
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(getAllCars())
	},[dispatch])

	function addToCart(car){
		dispatch(addItem(car))
		dispatch(showMessage('add'))
		setTimeout(() => {
			dispatch(hideMessage());
		}, 2500);
	}
	return (
		<div className="container-fluid">
			<div className="row">{cars.map((car, index) => <Car key={index} car={car} addToCart={addToCart}/>)}</div>
		</div>
	);
}
