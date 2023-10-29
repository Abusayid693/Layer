import { useNavigationState } from '@react-navigation/native';


export const currentRoute = ()=>{

const routes = useNavigationState(state => state.routes)
const currentRoute = routes[routes.length -1].name
return currentRoute;
}

export const uid = () =>{
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}