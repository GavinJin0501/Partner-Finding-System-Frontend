import Index from '../pages/Index.vue'
import Teams from '../pages/TeamsPage.vue'
import User from '../pages/UserPage.vue'
import UserEditPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue"

// Define some routes
const routes = [
    { path: '/', component: Index },
    { path: '/teams', component: Teams },
    { path: '/user', component: User },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
    { path: '/user/login', component: UserLoginPage },
];

 export default routes;