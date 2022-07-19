import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Course from "../screens/course";
import Login from "../screens/login";
import Register from "../screens/register";
import Admin from "../screens/admin";

const screens={
    Login:{screen:Login,navigationOptions:{title:'התחברות'}},
    Home:{screen:Home,navigationOptions:{title:'קורסים'}},
    Admin:{screen:Admin,navigationOptions:{title:'אזור מנהל'}},
    Login:{screen:Login,navigationOptions:{title:'התחברות'}},
    Course:{screen:Course,navigationOptions:{title:'פרטי קורס'}},
    Register:{screen:Register,navigationOptions:{title:'הרשמה'}}
}

const HomeStack=createStackNavigator(screens,
    {defaultNavigationOptions:{headerStyle:{backgroundColor:'#eee',height:60,size:15}}});
export default createAppContainer(HomeStack);