import { GET_USER, GET_PASSWORD } from "../../action/userAction";
const initialState = {
user : ''
}

const User = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER :
            return {
                user : action.payload.username
            }
        default:
            return state;
    }
}

export default User