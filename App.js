import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardAtleta from './CardAtleta';
import PainelFavoritos from './PainelFavoritos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Faça login na sua conta"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  cardsContainer: {
    alignItems: 'center',
  },
});

const HomeScreen = () => {
  const [atletasFavoritos, setAtletasFavoritos] = useState([]);
  const [dadosDosAtletas, setDadosDosAtletas] = useState([]);
  const [textoPesquisa, setTextoPesquisa] = useState('');

  const handleClick = () => {
    fetch('https://apiv3.apifootball.com/?action=get_players&player_name=' + textoPesquisa + '&APIkey=2e3f80fc7771827f3d55297a701a0f6cef442b6ed7d184f66f1a4ced574461f7')
      .then((response) => response.json())
      .then((data) => setDadosDosAtletas(data))
      .catch((error) => console.error('Erro ao buscar dados da API:', error));
  };

  const handleClickFavoritos = () => {
    setDadosDosAtletas(atletasFavoritos);
  };

  const handleAddToFavoritos = (atleta) => {
    setAtletasFavoritos([...atletasFavoritos, atleta]);
  };

  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buscar atletas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Atleta"
          value={textoPesquisa}
          onChangeText={(text) => setTextoPesquisa(text)}
        />
        <Button title="Pesquisar" onPress={handleClick} />
        <Button title="Mostrar favoritos" onPress={handleClickFavoritos} />
      </View>
      <PainelFavoritos
        atletasFavoritos={atletasFavoritos}
      />
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
};

