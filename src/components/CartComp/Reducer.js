const Reducer = (cart = [], action) => {
  switch (action.type) {
    case "ADD":
      var tempcart = cart.filter((item) => item.id === action.payload.id);
      if (tempcart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    break;
    case "REMOVE":
      return cart.filter((item) => item.id !== action.payload.id);
    break;
    case "INCREASE":
      var tempcart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return tempcart;
    break;
    case "DECREASE":
      var tempcart = cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return tempcart;
    default:
      return cart;
  }
};
export default Reducer;
