// import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import the screens
import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDKKjW5Pq7yUstjPeqQq_WwMizuEMYl52s",
    authDomain: "shopping-list-demo-d72a6.firebaseapp.com",
    projectId: "shopping-list-demo-d72a6",
    storageBucket: "shopping-list-demo-d72a6.appspot.com",
    messagingSenderId: "694094871556",
    appId: "1:694094871556:web:31b51c42aeb1c630bd4951"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;