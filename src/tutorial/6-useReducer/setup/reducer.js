export function reducer(state, action) {
  // reducer function
  const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
      const newPeople = [...state.people, action.payload]
      return {
        ...state,
        people: newPeople,
        showModal: true,
        modalContent: 'item added',
      }
    }
    if (action.type === 'NO_VALUE') {
      return { ...state, showModal: true, modalContent: 'Please Enter Value' }
    }
    if (action.type === 'CLOSE_MODAL') {
      return { ...state, showModal: false }
    }
    if (action.type === 'REMOVE_ITEM') {
      const newPeople = state.people.filter(
        (person) => person.id !== action.payload
      )
      return { ...state, people: newPeople }
    } // return state
    throw new Error('no matching Error type')
  }
}
