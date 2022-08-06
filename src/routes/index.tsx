import * as React from 'react';
import { RouteProps } from 'react-router-dom';

import Cards from './Cards';
import Home from './Home';
// import PageNotFound from './PageNotFound';

export interface IRoute extends RouteProps {
    exact?: boolean;
    fetchData?: Function;
    component?: any;
    render?: any;
}

export interface IRoutePropsConfig {
    onInitMessaging?: any;
}

const routes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/cards/:cardId',
        element: <Cards />,
    },

    // If no route matches, return NotFound component
    // {
    //     component: PageNotFound,
    // },
];

export default routes;
