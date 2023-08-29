import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ContextConsumer } from './contexts/ContextProvider';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
   Ecommerce, Line, Orders, Calendar, Employees, Stacked, Pyramid, Customers,
   Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor
} from './pages'
import './App.css';

export default function App(props) {
   const { activeMenu, themeSettings, setThemeSettings, currentColor,
      currentMode } = ContextConsumer();
   return (
      <div className={currentMode === 'Dark' ? 'dark' : undefined}>
         <BrowserRouter>
            <div className='flex relative dark:bg-secondary-dark'>

               <div className='fixed right-5 bottom-5' style={{ zIndex: 1000 }}>
                  <TooltipComponent content='Settings' position='TopLeft'>
                     <button
                        type='button'
                        style={{ backgroundColor: currentColor, borderRadius: '50%' }}
                        className='text-2xl text-white p-3 hover:drop-shadow-lg
                                   hover:bg-light-gray'
                        onClick={() => setThemeSettings(true)}
                     >
                        <FiSettings />
                     </button>
                  </ TooltipComponent >
               </div>

               {activeMenu ?
                  <div className='w-72 fixed sidebar min-h-screen
                   dark:bg-secondary-dark bg-white'
                  >
                     <Sidebar />
                  </div>
                  :
                  <div className='w-0 dark:bg-secondary-dark'>
                     <Sidebar />
                  </div>}

               <div className={`dark:bg-main-dark bg-main min-h-screen w-full
               ${activeMenu ? 'md:ml-72' : 'flex-2'}`}
               >
                  <nav className='fixed md:static bg-main dark:bg-secondary-dark
                  navbar w-full'
                  >
                     <Navbar />
                  </nav>

                  {themeSettings && <ThemeSettings />}

                  <div>
                     <Routes>
                        {/* Dashboard */}
                        <Route path="/" element={<Ecommerce />} />
                        <Route path="/ecommerce" element={<Ecommerce />} />

                        {/* Pages */}
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers" element={<Customers />} />

                        {/* Apps */}
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/color-picker" element={<ColorPicker />} />

                        {/* Charts */}
                        <Route path="/line" element={<Line />} />
                        <Route path="/area" element={<Area />} />
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/financial" element={<Financial />} />
                        <Route path="/color-mapping" element={<ColorMapping />} />
                        <Route path="/pyramid" element={<Pyramid />} />
                        <Route path="/stacked" element={<Stacked />} />
                     </Routes>
                  </div>

               </div>

            </div>
         </BrowserRouter>
      </div>
   )
}