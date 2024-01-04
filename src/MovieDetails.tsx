// MovieDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native';

const MovieDetails = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image style={styles.poster} source={{ uri: `https://image.tmdb.org/t/p/w300/${movie.poster_path}` }} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.lancamento}>{`Data de Lançamento: ${movie.release_date}`}</Text>
      <Text style={styles.descricao}>{movie.overview}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  poster: {
    width: 150,
    height: 225,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    textAlign: 'center',
    fontSize:20,
    marginBottom: 10,
    marginTop:10
  },
  lancamento:{
    fontSize: 15,
    fontWeight: 'bold',
  }
});

export default MovieDetails;
