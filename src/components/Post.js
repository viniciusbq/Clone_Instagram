import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Autor from './Autor';
import Comments from './Comments';
import AddComment from './AddComment';

const Post = props => {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.image} />
      <Autor email={props.email} nickname={props.nickname} />
      <Comments comments={props.comments} />
      <AddComment />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -17,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});

export default Post;
