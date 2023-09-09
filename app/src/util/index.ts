import { useNavigationState } from '@react-navigation/native';


export const currentRoute = ()=>{

const routes = useNavigationState(state => state.routes)
const currentRoute = routes[routes.length -1].name
return currentRoute;
}