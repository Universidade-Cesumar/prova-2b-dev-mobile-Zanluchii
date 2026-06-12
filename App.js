import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const API_URL = 'https://6a18c42023c3626470ac0118.mockapi.io/api/v1/insumos';

export default function App() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [materiais, setMateriais] = useState([]);

  async function buscarMateriais() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setMateriais(data);
    } catch (error) {
      console.log('Erro ao buscar materiais:', error);
    }
  }

  async function cadastrarMaterial() {
    try {
      const novoMaterial = {
        nomeInsumo: nome,
        quantidade: quantidade,
      };

      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoMaterial),
      });

      setNome('');
      setQuantidade('');
      buscarMateriais();
    } catch (error) {
      console.log('Erro ao cadastrar material:', error);
    }
  }

  useEffect(() => {
    buscarMateriais();
  }, []);

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
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        testID="input-quantidade"
        style={styles.input}
        placeholder="Quantidade em estoque"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <TouchableOpacity
        testID="btn-cadastrar"
        style={styles.botao}
        onPress={cadastrarMaterial}
      >
        <Text style={styles.textoBotao}>Cadastrar Material</Text>
      </TouchableOpacity>

      <FlatList
        testID="lista-materiais"
        data={materiais}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeMaterial}>
              {item.nomeInsumo || item.nome || 'Material sem nome'}
            </Text>

            <Text>
              Quantidade: {item.quantidade || 'Não informada'}
            </Text>

            <Text>
              Categoria: {item.categoria || 'Não informada'}
            </Text>

            <Text>
              Validade: {item.validade || 'Não informada'}
            </Text>

            <Text>
              Fornecedor: {item.fornecedor || 'Não informado'}
            </Text>

            <Text>
              Responsável: {item.responsavel || 'Não informado'}
            </Text>
          </View>
        )}
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
  card: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  nomeMaterial: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});