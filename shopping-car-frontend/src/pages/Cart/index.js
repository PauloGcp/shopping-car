import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ItemCart from '../../components/ItemCart';
import { removeItem } from '../../store/ducks/cart'
import { showMessage, hideMessage } from '../../store/ducks/layout';

export default function Cart() {
	const cart = useSelector(state => state.cart)

	const dispatch = useDispatch()

	function removeItemCart(id) {
		dispatch(removeItem(id))
		dispatch(showMessage('rmv'))
		setTimeout(() => {
			dispatch(hideMessage());
		}, 2500);
	}

	return (
		<div className='container-fluid'>
			<div className='row'>
				{cart.length === 0 ? (<p className='col-sm-12 mt-5 text-warning text-center'>Sem produtos no carrinho</p>)
					: (
						<>
							{cart.map(item =>
								(<ItemCart key={item._id} item={item} removeItemCart={removeItemCart}></ItemCart>)
							)}
						</>
					)}

			</div>
		</div>
	)
}
