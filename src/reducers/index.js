const reducer = (state,action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            const exist = state.myList.find(item => item.id === action.payload.id)
            if(exist) return {...state}
            return {
                //...state es el estado que ya tengo
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user:action.payload,
            }
        case 'GET_VIDEO_SOURCE':
            return {
            ...state,
            playing: state.trends.find(item => item.id === Number(action.payload))
            || state.original.find(item=> item.id === Number(action.payload)) || [],
            }
        default:
            return state;
       
}
}
//metodo filter: para crear un nuevo array de todos los elementos que cumplan con la condicion en la funcion dada, evaluar el id para comparar si esta en la lista para crear una desigualdad estricta y compararla con la action.payload
// Dentro de los reducers usaremos un switch para separar la lógica por cada tipo de acción que tendremos en Redux.
export default reducer;