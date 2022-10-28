import React from 'react';

import { useSelector } from 'react-redux';

export default function Message() {
	const isShow = useSelector((state) => state.layout.showMessage);
	const typeMessage = useSelector((state) => state.layout.typeMessage)

	const msg = ()=>{
		switch(typeMessage){
			case 'add':
				return 'Adicionado com sucesso'
			case 'rmv':
				return 'Removido com sucesso'
			case 'add_item':
				return 'Cadastrado com sucesso'
			default:
				return 'teste default'
		}
	}

	return (
		<React.Fragment>
			{isShow && (
				<div className="container mt-3">
					<div className="alert alert-success" role="alert">
						{msg()}
					</div>
				</div>
			)}
		</React.Fragment>
	);
}
