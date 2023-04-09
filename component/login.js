import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [inputFields, setInputFields] = React.useState({
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [active, setActive] = React.useState(false);
  const [active2, setActive2] = React.useState(false);
  const [active3, setActive3] = React.useState(false);
  const [checkSubmitForEmail, setCheckSubmitEmail] = React.useState(true);
  const [checkSubmitForPassword, setCheckSubmitPassword] = React.useState(true);
  const handleInputchange = (inputName, value) => {
    setInputFields({
      ...inputFields,
      [`${inputName}`]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Login Form</Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          width: '80%',
          margin: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 12,
          backgroundColor: 'white',
          shadowColor: 'blue',
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 9,
          borderColor: active ? 'green' : 'black',
        }}>
        <AntDesign name="mail" size={22} color={'red'} />
        <TextInput
          placeholder="Email"
          name="email"
          maxLength={12}
          onChangeText={value => handleInputchange('email', value)}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          style={{width: '50%'}}
        />
        {!checkSubmitForEmail ? (
          <Text style={{color: 'red'}}>wrong email !</Text>
        ) : null}
      </View>

      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          width: '80%',
          margin: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 12,
          backgroundColor: 'white',
          shadowColor: 'blue',
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 9,
          borderColor: active2 ? 'green' : 'black',
        }}>
        <AntDesign name="lock" size={22} color={'red'} />
        <TextInput
          placeholder="Password"
          name="password"
          secureTextEntry
          onChangeText={value => handleInputchange('password', value)}
          style={{width: '50%'}}
          onFocus={() => setActive2(true)}
          onBlur={() => setActive2(false)}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          width: '80%',
          margin: 5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 12,
          backgroundColor: 'white',
          shadowColor: 'blue',
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 9,
          borderColor: active3 ? 'green' : 'black',
        }}>
        <AntDesign name="lock" size={22} color={'red'} />
        <TextInput
          placeholder="repeat-password"
          secureTextEntry
          onChangeText={value => handleInputchange('repeatPassword', value)}
          maxLength={12}
          name="repeatPassword"
          style={{width: '50%'}}
          onFocus={() => setActive3(true)}
          onBlur={() => setActive3(false)}
        />
        {!checkSubmitForPassword ? (
          <Text style={{color: 'red'}}>wrong password !</Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={styles.button}
        disabled={!Object.values(inputFields).every(Boolean)}
        onPress={() => {
          setCheckSubmitEmail(inputFields.email.includes('@'));
          setCheckSubmitPassword(
            inputFields.password === inputFields.repeatPassword,
          );
          if (checkSubmitForEmail == true && checkSubmitForPassword == true) {
            navigation.navigate('SetupPage');
          }
        }}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inptcontainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 4,
    backgroundColor: 'white',
    shadowColor: 'blue',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 9,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    color: 'green',
  },
  button: {
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  active: {
    borderColor: 'green',
  },
});
export default Login;
