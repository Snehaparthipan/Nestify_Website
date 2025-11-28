import React, { createContext, useState } from "react";

export const LearnMoreContext = createContext();

export const LearnMoreProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <LearnMoreContext.Provider value={{ showMore, toggleMore }}>
      {children}
    </LearnMoreContext.Provider>
  );
};
