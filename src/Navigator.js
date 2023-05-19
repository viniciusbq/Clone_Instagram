import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const LoginOrProfileRouter = () => (
  <Stack.Navigator initialRouteName="AuthRouter">
    <Stack.Screen
      options={{headerShown: false}}
      name="Profile"
      component={Profile}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="AuthRouter"
      component={AuthRouter}
    />
  </Stack.Navigator>
);

const AuthRouter = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = 'home';
            } else if (route.name === 'Camera') {
              iconName = 'camera';
            } else if (route.name === 'User') {
              iconName = 'user';
            }
            return <Icon name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          headerShown: false,
        })}
        initialRouteName={Feed}>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Camera" component={AddPhoto} />
        <Tab.Screen name="User" component={LoginOrProfileRouter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
