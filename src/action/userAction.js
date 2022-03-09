export const GET_USER = 'GET_USER'



export const getID = (data) => {
    return (dispatch) => {
        dispatch({
            type: GET_USER,
            payload : {
                username : data
            }
        })
    }
}
