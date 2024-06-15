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
  const showItem = (name) => {
    setIsShow((isShow) => ({
      ...isShow,
      [name]: !isShow[name],
      overlay: !isShow.overlay,
    }));
  };

  const [isShow, setIsShow] = useState(initialValue);
  return (
    <showContext.Provider value={{ isShow, setIsShow, showItem }}>
      {children}
    </showContext.Provider>
  );
}

export default ShowContextProvider;
