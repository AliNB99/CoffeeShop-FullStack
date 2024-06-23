export const productCount = (store, id) => {
  const index = store.selectedItems.findIndex((p) => p._id === id);

  if (index === -1) {
    return 0;
  } else {
    return store.selectedItems[index].quantity;
  }
};
