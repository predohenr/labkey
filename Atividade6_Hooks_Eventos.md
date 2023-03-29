const estilo = StyleSheet.create({
  senhaerrada: {
    color: 'red',
  },
  senhacerto: {
    color: 'green',
  },
  container: {
    padding: 10,
  },
});
function App(): JSX.Element {
  const [user, setUser] = useState('');
  const [senha, setSenha] = useState('');
  const [auth, setAuth] = useState(null);
  const alt = () => {
    if (user === 'abc' && senha === '123') {
      Alert.alert('vc fez login com sucesso');
      setAuth(false);
    } else {
      Alert.alert('diferentes');
      setAuth(true);
    }
  };
  return (
    <View style={estilo.container}>
      <Text>Usuário</Text>
      <TextInput
        placeholder="Seu nome de usuário"
        defaultValue={user}
        onChangeText={novoUsuario => setUser(novoUsuario)}
      />
      <Text>Senha</Text>
      <TextInput
        placeholder="Insira sua senha"
        secureTextEntry={true}
        defaultValue={senha}
        onChangeText={novaSenha => setSenha(novaSenha)}
      />
      <Button title="Login" onPress={alt} />
      {auth === true && (
        <Text style={estilo.senhaerrada}>nome ou senha incorretos</Text>
      )}
      {auth === false && (
        <Text style={estilo.senhacerto}>login com sucesso</Text>
      )}
    </View>
  );
}
export default App;
