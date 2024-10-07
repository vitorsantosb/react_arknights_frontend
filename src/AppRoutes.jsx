import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {userRoutes} from '@/models/routes.js';


//Pages
import Home from '@/pages/home/Home.jsx';
import RoutesWithNotFound from '@/utils/RoutesWithNotFound/RoutesWithNotFound.jsx';
import Chat from '@/pages/chat/Chat.jsx';

function AppRoutes() {

  return (
    <Router>
      <RoutesWithNotFound>
        <Route>
          <Route index exact path={"/"} element={<Home/>}/>
          <Route index exact path={"/chat"} element={<Chat/>}/>
        </Route>
      </RoutesWithNotFound>
    </Router>
  );
}

export default AppRoutes;