import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function App() {
  // --- Estados da Aplicação (Os alunos implementarão aqui) ---

  // --- Funções de Requisição e Efeitos (Os alunos implementarão aqui) ---

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Estoque - Enfermagem</Text>

      <Text style={styles.description}>
        Sistema para controle de materiais utilizados nas atividades de enfermagem.
      </Text>

      <TextInput
        testID="input-nome"
        style={styles.input}
        placeholder="Nome do material"
      />

      <TextInput
        testID="input-quantidade"
        style={styles.input}
        placeholder="Quantidade em estoque"
        keyboardType="numeric"
      />

      <TouchableOpacity
        testID="btn-cadastrar"
        style={styles.botao}
      >
        <Text style={styles.textoBotao}>Cadastrar Material</Text>
      </TouchableOpacity>

      <FlatList
        testID="lista-materiais"
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => null}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});