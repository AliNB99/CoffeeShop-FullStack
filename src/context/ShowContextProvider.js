"use client";

import { createContext, useState } from "react";

export const showContext = createContext();

const initialValue = {
  sidebar: false,
  cartSidebar: false,
  storeItem: false,
  details: false,
  overlay: false,
};

function ShowContextProvider({ children }) {
  // show item sidebar in dashboard and homePage
  const onShowElement = ({ element, overlay }) => {
    overlay
      ? setShowElement((showElement) => ({
          ...showElement,
          [element]: !showElement[element],
        }))
      : setShowElement((showElement) => ({
          ...showElement,
          [element]: !showElement[element],
          overlay: !showElement.overlay,
        }));
  };

  const [showElement, setShowElement] = useState(initialValue);
  return (
    <showContext.Provider
      value={{ showElement, onShowElement, setShowElement }}
    >
      {children}
    </showContext.Provider>
  );
}

export default ShowContextProvider;
