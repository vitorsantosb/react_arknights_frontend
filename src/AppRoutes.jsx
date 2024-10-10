import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {userRoutes} from '@/models/routes.js';


//Pages
import Home from '@/pages/home/Home.jsx';
import RoutesWithNotFound from '@/utils/RoutesWithNotFound/RoutesWithNotFound.jsx';
import Chat from '@/pages/chat/Chat.jsx';
import Forum from '@/pages/forum/Forum.jsx';
import Layout from '@/components/Layouts/Layout.jsx';
import HomePage from '@/pages/home/HomePage.jsx';

function AppRoutes() {

  return (
    <Router>
      <RoutesWithNotFound>
        <Route element={<Layout/>}>
          <Route index exact path={"/"} element={<HomePage/>}/>
          <Route index exact path={userRoutes.CHAT} element={<Chat/>}/>
          <Route index exact path={userRoutes.FORUM} element={<Forum/>}/>
        </Route>
      </RoutesWithNotFound>
    </Router>
  );
}

export default AppRoutes;