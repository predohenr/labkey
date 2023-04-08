Estilos para usar nas telas:  

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
Função principal do app:

    function App(): JSX.Element {
Hooks são uma nova adição no React 16.8. Eles permitem que você use o estado e outros recursos do React sem escrever uma classe.
Hooks são funções que permitem que você “enganche” os recursos de estado e ciclo de vida do React a partir de componentes de função. 
Hooks não funcionam dentro de classes — eles permitem que você use React sem classes.

Hooks de Estado para o nome do usuário, sua senha e para determinar se a autenticação foi correta:

      const [user, setUser] = useState('');
      const [senha, setSenha] = useState('');
      const [auth, setAuth] = useState(null);
Função que usa os Hooks de Estado para determinar se o usuário foi autenticado corretamente:

      const alt = () => {
        if (user === 'abc' && senha === '123') {
          Alert.alert('vc fez login com sucesso');
          setAuth(false);
        } else {
          Alert.alert('diferentes');
          setAuth(true);
        }
      };
Tela principal:

      return (
        <View style={estilo.container}>
         <Text>Usuário</Text>
Com JavaScript padrão, para lidar com um evento, precisamos primeiro obter o elemento e salvá-lo em uma variável. Então, precisávamos usar addEventListener para lidar com qualquer evento que pudesse acontecer em nosso app.

Com o React, é um pouco diferente e muito mais fácil. Em um botão, podemos acessar o atributo onClick JSX, que faz exatamente a mesma coisa que a função addEventListener.

Nesse TextInput tem um evento onChangeText que atualiza o hook do nome de usuário criado anteriormente:

         <TextInput
            placeholder="Seu nome de usuário"
            defaultValue={user}
            onChangeText={novoUsuario => setUser(novoUsuario)}
          />
          <Text>Senha</Text>
A mesma coisa ocorre nesse TextInput, mas para o hook da senha:

          <TextInput
            placeholder="Insira sua senha"
            secureTextEntry={true}
            defaultValue={senha}
            onChangeText={novaSenha => setSenha(novaSenha)}
          />
Nesse botão, tem um evento onPress para chamar a função de autenticação criada anteriormente, que ocorre quando o botão é pressionado:

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
