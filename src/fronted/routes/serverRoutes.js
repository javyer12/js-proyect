import Home from "../containers/Home"
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from "../containers/Player";

const routes = [
    {
        exact: true,
        path: '/',
        component: Home,
    },
    {
        exact: true,
        path: '/login',
        component: Login,
    },{
        exact: true,
        path: '/register',
        component: Register,
    },{
        name: 'NotFound',
        path: NotFound,
    },
];


export default routes;