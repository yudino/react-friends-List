export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    payload: contact,
    id: Math.random(),
});

export const setContact = (contacts) => ({
    type: 'SET_CONTACT',
    payload: contacts,
});
