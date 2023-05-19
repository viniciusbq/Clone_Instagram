import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddComment = () => {
  const [state, setState] = useState({
    comment: '',
    editMode: false,
  });

  handleAddComment = () => {
    Alert.alert('Adicionado!', state.comment);
  };

  let commentArea = null;

  if (state.editMode) {
    commentArea = (
      <View style={styles.container}>
        <TextInput
          placeholder="Pode comentar..."
          style={styles.input}
          autoFocus={true}
          value={state.comment}
          onChangeText={comment =>
            setState(prevState => ({...prevState, comment}))
          }
          onSubmitEditing={() => {
            handleAddComment();
            setState({editMode: false});
          }}
        />
        <TWF onPress={() => setState({editMode: false})}>
          <Icon name="times" size={15} color="#555" />
        </TWF>
      </View>
    );
  } else {
    commentArea = (
      <TWF onPress={() => setState({editMode: true})}>
        <View style={styles.container}>
          <Icon name="comment-o" size={25} color="#555" />
          <Text style={styles.caption}>Adicione um comentário...</Text>
        </View>
      </TWF>
    );
  }
  return (
    <>
      <View style={{flex: 1}}>{commentArea}</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#ccc',
  },
  input: {
    width: '90%',
  },
});
export default AddComment;
