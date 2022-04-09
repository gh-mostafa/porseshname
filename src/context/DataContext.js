import { createContext, useContext, useState } from "react";

const userInfo = createContext();
const updateInfo = createContext();

export function useInfo() {
  return useContext(userInfo);
}
export function useUpdateInfo() {
  return useContext(updateInfo);
}

export function DataContext({ children }) {
  const [inputData, SetInputData] = useState({
    name: "",
    pn: -1,
    cm: -1,
    ans1: -1,
    ans2: -1,
    ans3: -1,
  });

  function setData(props){
      SetInputData((prev) => {
        const dt = { ...prev, ...props };
        return dt;
      });
      console.log(inputData);
  }

  return (
    <userInfo.Provider value={inputData}>
      <updateInfo.Provider value={setData}>{children}</updateInfo.Provider>
    </userInfo.Provider>
  );
}
