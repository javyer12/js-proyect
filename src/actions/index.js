export const setFavorite = payload => ({
    type: 'SET_FAVORITE',
    payload,
});
// type: para indicar la acción que se va a ejecutar.
// payload: es la información que estamos mandando al reducer.

export const deleteFavorite = payload => ({
    type: 'DELETE_FAVORITE',
    payload,
})

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
});

export const logoutRequest = payload => ({
    type: "LOGOUT_REQUEST",
    payload,
})
export const registerRequest = payload => ({
    type: "REGISTER_REQUEST",
    payload,
})