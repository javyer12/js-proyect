const reducer = (state,action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                //...state es el estado que ya tengo
                ...state,
                myList: [...state.myList, action.payload]
            }
        default:
            return state;
       
}
}
// Dentro de los reducers usaremos un switch para separar la lógica por cada tipo de acción que tendremos en Redux.
export default reducer;