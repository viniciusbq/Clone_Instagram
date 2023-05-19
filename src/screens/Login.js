import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Login = ({navigation}) => {
  state = {
    email: '',
    password: '',
  };

  login = () => {
    navigation.navigate('Profile');
  };
  register = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus={true}
        keyboardType="email-address"
        value={state.email}
        onChangeText={email => setState({email})}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={state.password}
        onChangeText={password => setState({password})}
      />
      <TouchableOpacity onPress={login} style={styles.buttom}>
        <Text style={styles.buttomText}> Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={register} style={styles.buttom}>
        <Text style={styles.buttomText}>Criar nova conta...</Text>
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
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttomText: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
  },
});
export default Login;
