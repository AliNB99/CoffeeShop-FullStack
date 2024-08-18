import { compare, hash } from "bcryptjs";

// manage Cart ReduxToolkit
export const productCount = (state, id) => {
  const index = state.selectedItems.findIndex((p) => p._id === id);

  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

// Calculate counter Product
export const counterTotal = ({ state, type }) => {
  switch (type) {
    case "totalItem":
      return state.selectedItems.reduce((acc, cur) => acc + cur.quantity, 0);
    case "totalPrice":
      return state.selectedItems.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        0
      );
    case "totalDiscount":
      return state.selectedItems.reduce(
        (acc, cur) => acc + (cur.price * cur.quantity * cur.discount) / 100,
        0
      );
    case "finalPrice":
      return state.selectedItems.reduce(
        (acc, cur) =>
          acc + (cur.price * (cur.discount - 100) * cur.quantity) / 100,
        0
      );
  }
  if (type === "totalItem") {
    return state.selectedItems.reduce((acc, cur) => acc + cur.quantity, 0);
  } else if (type === "totalPrice") {
  } else if (type === "totalDiscount") {
    return state.selectedItems.reduce(
      (acc, cur) => acc + (cur.price * cur.discount) / 100,
      0
    );
  } else if (type === "finalPrice") {
    return state.selectedItems.reduce(
      (acc, cur) => acc + (cur.price * (cur.discount - 100)) / 100,
      0
    );
  }
};

// for loaded Image
export const setLoadingImg = (src, stopLoading) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    stopLoading("loadedImg");
  };
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// codding password by using hash
export async function hashingPassword(password) {
  const result = await hash(password, 12);
  return result;
}

// Verify that the password is correct
export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
