import React from 'react';
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

import './styles.css';

export default function Header() {
	
	const length = useSelector(state => state.cart.length)
	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<NavLink to="/list" activeclassname="active" className="navbar-brand">
				Shopping-Car
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/list" activeclassname="active" className="nav-link">
							Listar
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/add" activeclassname="active" className="nav-link">
							Adicionar
						</NavLink>
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/cart" activeclassname="active" className="nav-item">
					<i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
						<span className="fa-counter">{length}</span>
					</i>
				</NavLink>
			</ul>
		</nav>
	);
}
