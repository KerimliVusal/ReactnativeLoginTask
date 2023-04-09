import React, {useEffect} from 'react';
import {
  StatusBar,
} from 'react-native';
import Login from './component/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SetupPage from './component/setup';
import Home from './component/home';
import Country from './component/countries';

const Stack = createNativeStackNavigator();

const App = () => {
  const [countryNameData, setCountryNameData] = React.useState([]);
  const [countryCodeData, setCountryCodeData] = React.useState([]);
  const [countryAllData, setCountryAllData] = React.useState([]);

  const fetchCountriesData = async () => {
    const response = await fetch('http://country.io/names.json');
    const response2 = await fetch('http://country.io/phone.json');
    const nameData = await response.json();
    const codeData = await response2.json();
    setCountryNameData(nameData);
    setCountryCodeData(codeData);
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  useEffect(() => {
    const groupedCountries = Object.entries(countryNameData).map(
      countryArr => ({
        name: countryArr[1],
        code: countryCodeData[countryArr[0]],
      }),
    );
    setCountryAllData(groupedCountries);
  }, [countryNameData, countryCodeData]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SetupPage" component={SetupPage} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Country"
          component={Country}
          initialParams={{countries: countryAllData}}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor="green" />
    </NavigationContainer>
  );
};

export default App;
