import {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

const Feed = props => {
  state = {
    posts: [
      {
        id: Math.random(),
        nickname: 'Vinicius Borba Queiroz',
        email: 'viniciusjkj@gmail.com',
        image: require('../../assets/imgs/fence.jpg'),
        comments: [
          {
            nickname: 'John Ray',
            comment: 'Stunnig!',
          },
          {
            nickname: 'Ana Julia',
            comment: 'Foto Linda!',
          },
        ],
      },
      {
        id: Math.random(),
        nickname: 'Francisco Queiroz',
        email: 'frascasd@gmail.com',
        image: require('../../assets/imgs/bw.jpg'),
        comments: [],
      },
    ],
  };
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={state.posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <Post key={item.id} {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
