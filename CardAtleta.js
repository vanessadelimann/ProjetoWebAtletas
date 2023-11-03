import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function CardAtleta(props) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.cardTitle}>{props.player_name}</Text>
        <TouchableOpacity onPress={props.onPress} style={styles.cardButton}>
          <Text>{props.label}</Text>
        </TouchableOpacity>
      </View>
      <Text>Idade: {props.player_age}</Text>
      <Text>Número: {props.player_number}</Text>
      <Text>Gols: {props.player_goals}</Text>
      <Text>Time: {props.team_name}</Text>
      <Image source={{ uri: props.player_image }} style={styles.cardImage} onError={(error) => console.log('Erro de imagem:', error)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    padding: 16,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default CardAtleta;
