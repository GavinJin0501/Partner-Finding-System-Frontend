import Index from '../pages/Index.vue'
import Teams from '../pages/TeamsPage.vue'
import User from '../pages/UserPage.vue'
import Search from '../pages/SearchPage.vue'
import UserEditPage from "../pages/UserEditPage.vue";

// Define some routes
const routes = [
    { path: '/', component: Index },
    { path: '/teams', component: Teams },
    { path: '/user', component: User },
    { path: '/search', component: Search },
    { path: '/user/edit', component: UserEditPage },
];

 export default routes;