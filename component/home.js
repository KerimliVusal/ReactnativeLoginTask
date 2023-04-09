import React from 'react';
import {View, Text, Image} from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
const Home = () => {
  SweetAlert.showAlertWithOptions({
    title: 'You have successfullly registered',
    confirmButtonTitle: 'OK',
    confirmButtonColor: '#000',
    otherButtonTitle: 'Cancel',
    otherButtonColor: '#dedede',
    style: 'success',
    cancellable: true,
  });
  const image = {
    uri: 'https://cdni.iconscout.com/illustration/premium/thumb/user-showing-user-login-page-in-website-or-application-1886527-1597938.png',
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={image} style={{width: 400, height: 400}} />
      <Text>You Sign In Successfullly</Text>
    </View>
  );
};
export default Home;
