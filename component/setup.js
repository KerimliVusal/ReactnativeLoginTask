import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const SetupPage = ({navigation, route}) => {
  const {code} = route.params ?? {};
  const [phone, SetPhone] = useState('');
  const [activ, Setactiv] = useState('');
  const [err, setErr] = useState(false);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{marginBottom: 20}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'green',
            fontSize: 20,
            padding: 20,
            fontWeight: 600,
          }}>
          Setup Your Profile
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row',
          width: '80%',
          borderColor: activ ? 'green' : 'black',
        }}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: 'rgba(3,0,63,0.1)',
            borderRightWidth: 1,
          }}>
          <Text
            style={{padding: 5, color: 'black'}}
            onPress={() => navigation.navigate('Country')}>
            {code ?? '+994'}
          </Text>
        </View>
        <View>
          <TextInput
            placeholder="Phone"
            style={{padding: 10}}
            numeric
            keyboardType={'numeric'}
            onChangeText={text => SetPhone(text)}
            maxLength={15}
            onFocus={() => Setactiv(true)}
            onBlur={() => Setactiv(false)}
          />
        </View>
      </View>
      {err ? (
        <Text style={{color: 'red'}}>
          phone number must be at least 9 digit !
        </Text>
      ) : null}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          phone.length < 8 ? setErr(true) : setErr(false);
          err == false && phone.length > 8 ? navigation.navigate('Home') : null;
        }}>
        <Text style={styles.text}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
    marginTop: 30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default SetupPage;
