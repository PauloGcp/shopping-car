import React from 'react';

import { useSelector } from 'react-redux';

export default function Message() {
	const isShow = useSelector((state) => state.layout.showMessage);
	const typeMessage = useSelector((state) => state.layout.typeMessage)

	return (
		<React.Fragment>
			{isShow && (
				<div className="container mt-3">
					<div className="alert alert-success" role="alert">
						{typeMessage === 'add'? 'Cadastro com sucesso!!!': 'Removido com sucesso'}
					</div>
				</div>
			)}
		</React.Fragment>
	);
}
