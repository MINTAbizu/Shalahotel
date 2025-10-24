export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "Addtobasket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "removebasket":
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;