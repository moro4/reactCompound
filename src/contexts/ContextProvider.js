import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();
const initialState = {
   chat: false, cart: false, userProfile: false, notification: false
};

function ContextProvider({children}) {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);

   function iconClick(navIcon) {
      setIsClicked({...initialState, [navIcon]: true});
   }

   return (
      <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked,
         setIsClicked, iconClick, screenSize, setScreenSize }}
      >
         {children}
      </StateContext.Provider>
   )
}

function ContextConsumer() {
   return useContext(StateContext);
}

export {ContextProvider, ContextConsumer};