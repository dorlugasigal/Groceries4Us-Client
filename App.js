import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { SignInScreen } from './src/screens/auth/SignInScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { OtherScreen } from './src/screens/OtherScreen';
import { AuthLoadingScreen } from './src/screens/auth/AuthLoadingScreen';
import { SignUpScreen } from './src/screens/auth/SignUpScreen';
import { ForgetPasswordScreen } from './src/screens/auth/ForgetPasswordScreen';
const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator(
  { SignIn: SignInScreen, SignUp: SignUpScreen, ForgetPassword: ForgetPasswordScreen },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
