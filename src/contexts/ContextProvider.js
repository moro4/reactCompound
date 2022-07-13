import React, {createContext, useContext, useState} from 'react';

const StateContext = createContext();
const initialState = {
   chat: false, cart: false, userProfile: false, notification: false
};

function ContextProvider({children}) {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setCurrentColor] = useState('#03C9D7');
   const [currentMode, setCurrentMode ] = useState('Light');
   const [themeSettings, setThemeSettings ] = useState(false);


   function setColor(color) {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
      setThemeSettings(false);
   }

   function setMode(e) {
      setCurrentMode(e.target.value);
      localStorage.setItem('themeMode', e.target.value);
      setThemeSettings(false);
   }

   function iconClick(navIcon) {
      setIsClicked({...initialState, [navIcon]: true});
   }

   return (
      <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked,
         setIsClicked, iconClick, screenSize, setScreenSize, currentColor,
         currentMode, themeSettings, setThemeSettings, setMode, setColor }}
      >
         {children}
      </StateContext.Provider>
   )
}

function ContextConsumer() {
   return useContext(StateContext);
}

export {ContextProvider, ContextConsumer};