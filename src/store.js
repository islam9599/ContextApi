import React, { createContext, useState } from "react";

export const PhotoContext = createContext();

export default function Store({ children }) {
  const [photo, setPhoto] = useState([]);
  return (
    <PhotoContext.Provider value={[photo, setPhoto]}>
      {children}
    </PhotoContext.Provider>
  );
}
