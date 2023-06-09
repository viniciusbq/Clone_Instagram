import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Gravatar} from 'react-native-gravatar';

const Profile = ({navigation}) => {
  logout = () => {
    navigation.navigate('Login');
  };

  const options = {email: 'fulano@gmail.com', secure: true};

  return (
    <View style={styles.contanier}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>Fulano de Tal</Text>
      <Text style={styles.email}>Fulanoal@gmail.com</Text>
      <TouchableOpacity onPress={logout} style={styles.buttom}>
        <Text style={styles.buttomText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Profile;
