const initState = {
    contacts: []
}

const contactsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT' : {
            return {...state, contacts: [...state.contacts, action.payload]}
        }
        case 'SET_CONTACT': {
            return {...state, contacts: action.payload}
        }
        default:
            return state
    }
}

export default contactsReducer;
