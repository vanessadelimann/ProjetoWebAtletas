import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardAtleta from './CardAtleta';

function PainelFavoritos({ atletasFavoritos }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Painel Favoritos</Text>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {Array.isArray(atletasFavoritos) ? (
          atletasFavoritos.map((atleta, index) => (
            <CardAtleta
              key={index}
              player_name={atleta.player_name}
              player_age={atleta.player_age}
              player_number={atleta.player_number}
              player_goals={atleta.player_goals}
              team_name={atleta.team_name}
              player_image={atleta.player_image}
              label="Favoritar"
              onPress={() => handleAddToFavoritos(atleta)}
            />
          ))
        ) : (
          <Text>Nenhum resultado encontrado.</Text>
        )}
      </ScrollView>
    </View>
  );
}



export default PainelFavoritos;
