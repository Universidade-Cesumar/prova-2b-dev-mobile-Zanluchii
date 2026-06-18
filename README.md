# Controle de Estoque - Enfermagem

## Descrição

Aplicativo mobile desenvolvido em React Native para auxiliar no controle de estoque de materiais utilizados em atividades de enfermagem.

O sistema permite cadastrar, consultar, buscar, atualizar e excluir materiais por meio da integração com a MockAPI, facilitando o gerenciamento dos insumos utilizados nas atividades práticas.

---

## Tecnologias Utilizadas

* React Native
* JavaScript
* MockAPI
* Hooks (useState e useEffect)
* Fetch API
* FlatList

---

## Funcionalidades

### Funcionalidades Implementadas na Sprint 1

* Cadastro de materiais
* Consulta de materiais cadastrados
* Integração com MockAPI
* Atualização automática da lista
* Interface mobile responsiva

### Funcionalidades Implementadas na Sprint 2

* Busca de materiais por nome
* Contagem total de itens exibidos
* Exclusão de materiais (DELETE)
* Baixa de estoque (PATCH)
* Validação de retirada de materiais
* Validação de campos obrigatórios no cadastro
* Atualização automática da interface após alterações

---

## Estrutura do Projeto

* **App.js**: Tela principal da aplicação.
* **MockAPI**: Armazenamento, consulta e manipulação dos dados.
* **README.md**: Documentação do projeto.

---

## Regras de Negócio

* Não é permitido cadastrar materiais sem nome ou quantidade.
* A quantidade retirada não pode ser menor ou igual a zero.
* A quantidade retirada não pode ser maior que o estoque disponível.
* A exclusão remove permanentemente o material da base de dados.

---

## Como Executar

### Instalar as dependências

```bash
npm install
```

### Iniciar o projeto

```bash
npm start
```

### Executar no dispositivo

* Abrir o Expo Go no celular e escanear o QR Code.
* Ou executar em um emulador Android/iOS.

---

## API Utilizada

MockAPI

Endpoint utilizado:

```txt
https://6a18c42023c3626470ac0118.mockapi.io/api/v1/insumos
```

### Operações Implementadas

* GET
* POST
* PATCH
* DELETE

---

## Autor

João Vinícius

Curso: Análise e Desenvolvimento de Sistemas

Instituição: UniCesumar
