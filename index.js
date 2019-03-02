/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ForgetPass from "./src/Components/ForgetPass";
import BookStore from "./src/Pages/BookStore";
import Login from "./src/Pages/Login";

AppRegistry.registerComponent(appName, () => Login);
