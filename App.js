import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { SignInScreen as SignIn } from './src/screens/auth/SignInScreen';
import { HomeScreen as Home } from './src/screens/main/HomeScreen';
import { OtherScreen as Other } from './src/screens/main/OtherScreen';
import { AuthLoadingScreen as AuthLoading } from './src/screens/auth/AuthLoadingScreen';
import { SignUpScreen as SignUp } from './src/screens/auth/SignUpScreen';
import { ForgetPasswordScreen as ForgetPassword } from './src/screens/auth/ForgetPasswordScreen';
import { ChangePasswordScreen as ChangePassword } from './src/screens/auth/ChangePasswordScreen';
const AppStack = createStackNavigator({ Home, Other });
const AuthStack = createStackNavigator(
  {
    SignIn,
    SignUp,
    ForgetPassword,
    ChangePassword
  },
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
      AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
