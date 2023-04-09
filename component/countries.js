import React from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View, ScrollView, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Country = ({route, navigation}) => {
  const {countries} = route.params;
  const [search, setSearch] = React.useState('');
  const [searchbar, setSearchbar] = React.useState(false);
  return (
    <ScrollView style={{padding: 10}}>
      <View
        style={
          searchbar
            ? {
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
              }
            : {display: 'none'}
        }>
        <AntDesign name="search1" size={22} />
        <TextInput
          placeholder="Type Here..."
          onChangeText={setSearch}
          value={search}
          style={{padding: 12}}
          onBlur={() => setSearchbar(false)}
        />
      </View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 20}}>Select Country</Text>
        <Text
          style={{textAlign: 'right'}}
          onPress={() => setSearchbar(!searchbar)}>
          <AntDesign name="filter" size={22} color={'red'} />
        </Text>
      </View>
      {countries
        .filter(country => country?.name?.includes(search))
        .map((country, index) => (
          <TouchableOpacity
            key={index}
            style={{
              marginTop: 10,
              borderColor: 'black',
              borderWidth: 1,
              padding: 5,
              paddingLeft: 35,
              borderRadius: 10,
              flexDirection: 'row',
            }}
            onPress={() =>
              navigation.navigate('SetupPage', {code: country.code})
            }>
            <Text style={{width: '28%'}}>{country?.code}</Text>
            <Text style={{marginLeft: 5, textAlign: 'left'}}>
              {country?.name}
            </Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};
export default Country;
