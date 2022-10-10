import api from "../../services/api";
import { addCars, addCar } from '../ducks/cars/index';

//redux-thunk nativo do configureStore
export const getAllCars = () => {
    return dispatch => {
        api.get('/cars')
            .then(res => {
                dispatch(addCars(res.data))
            })

    }
}

export const postCars = (car)=>{
    return dispatch =>{
        api.post('/cars', car)
            .then(res=> dispatch(addCar(res.data)))
    }
}