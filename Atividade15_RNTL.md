# Testes automatizados para React Native

## O que são testes automatizados e como funcionam?

Testes automatizados são uma técnica essencial para garantir a qualidade do software de forma sistemática, rápida e precisa. Eles permitem que os desenvolvedores verifiquem se o código funciona corretamente sem a necessidade de interação humana. 

Essa técnica funciona executando um conjunto de casos de teste automaticamente, comparando o resultado esperado com o resultado real. Se houver alguma diferença, é gerado um alerta indicando que algo não está correto. Dessa forma, os testes automatizados ajudam a encontrar erros de forma mais rápida e previnem problemas de regressão.

Os testes automatizados podem ser criados utilizando diversas ferramentas, mas no contexto do React Native, a biblioteca mais utilizada é a React Native Testing Library. Essa biblioteca é especialmente desenhada para testar componentes React Native e ajuda a manter um código limpo e fácil de entender.

## Como funcionam testes automatizados para React Native?

Os testes automatizados para React Native funcionam da mesma forma que em outros ambientes de desenvolvimento. Eles permitem verificar se os componentes estão sendo renderizados corretamente, se as propriedades estão sendo passadas corretamente, se as funções estão sendo chamadas no momento correto, entre outras funcionalidades.

As peculiaridades de utilização de testes automatizados em React Native podem incluir as seguintes diferenças em relação a outros frameworks populares:

1. Dependências nativas: como o React Native utiliza bibliotecas nativas para renderizar a interface do usuário, os testes automatizados podem ter que lidar com dependências nativas adicionais, além das bibliotecas JavaScript tradicionais. Isso pode exigir configurações extras e tornar a escrita de testes mais complexa.

2. Ambiente de teste: para executar testes automatizados em React Native, é necessário um ambiente de teste específico, que inclua tanto o simulador/emulador quanto as ferramentas de automação necessárias. Isso pode exigir uma configuração mais complexa do ambiente de desenvolvimento em comparação com frameworks baseados apenas em JavaScript.

3. Interação com APIs externas: como muitos aplicativos React Native dependem de APIs externas para funcionar corretamente, os testes automatizados devem simular essa interação com APIs externas. Isso pode exigir o uso de mocks ou ferramentas de teste específicas para gerenciar as chamadas de API.

4. Diferenças de plataforma: como o React Native suporta várias plataformas diferentes (iOS, Android, Windows, etc.), pode ser necessário escrever testes separados para cada plataforma ou garantir que os testes sejam compatíveis com todas as plataformas suportadas.

Em resumo, embora a maioria dos conceitos e práticas de teste automatizado sejam semelhantes entre os frameworks populares, as peculiaridades específicas do React Native podem exigir abordagens e ferramentas de teste únicas para garantir que os testes sejam eficazes e abrangentes.

Para criar os testes automatizados é necessário importar a biblioteca React Native Testing Library e utilizar a sintaxe do Jest. A biblioteca disponibiliza diversos métodos que facilitam a criação dos testes, tais como "render", "fireEvent" e "waitFor".

## Como instalar o React Native Testing Library?

Para começar a utilizar testes automatizados em projetos React Native, é necessário instalar a biblioteca React Native Testing Library. Para isso, basta rodar o seguinte comando no terminal:

```
npm install --save-dev @testing-library/react-native
```

Com a biblioteca instalada, podemos criar casos de teste utilizando a sintaxe do Jest. 

Um exemplo de teste automatizado para React Native que verifica se um botão é clicado corretamente:

```javascript
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Button from './Button';

describe('Button', () => {
  it('onPress is called when button is clicked', async () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Button onPress={onPress} />);
    const button = getByTestId('button');
    fireEvent.press(button);
    await waitFor(() => expect(onPress).toHaveBeenCalled());
  });
});
```

Neste exemplo, utilizamos o método "fireEvent" para simular o clique no botão e o método "waitFor" para esperar até que a função "onPress" seja chamada.

Outro exemplo pode ser um teste automatizado para verificar se todas as telas da aplicação estão sendo renderizadas corretamente:

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from '@testing-library/react-native';
import AppNavigator from './AppNavigator';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

describe('AppNavigator', () => {
  it('renders all screens correctly', () => {
    const { getByText } = render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
    const homeScreen = getByText('Home');
    const settingsScreen = getByText('Settings');
    expect(homeScreen).toBeDefined();
    expect(settingsScreen).toBeDefined();
  });
});
```

Este exemplo utiliza a biblioteca de navegação React Navigation para criar as telas da aplicação e o Stack Navigator para empilhar as telas. O caso de teste verifica se todas as telas estão sendo renderizadas corretamente.

E um último exemplo, onde você tem um aplicativo React Native com uma tela de login que requer autenticação. Ao fazer login, o usuário é redirecionado para a página inicial e pode ver seu nome de usuário no cabeçalho. Se o usuário não estiver autenticado ou fornecer credenciais inválidas, a página de login deve exibir uma mensagem de erro.

Para testar essa tela, você pode escrever os seguintes testes automatizados usando a React Native Testing Library:

```jsx
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoginScreen from './LoginScreen';

describe('LoginScreen', () => {
  test('displays error message if username or password is incorrect', async () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);
    fireEvent.changeText(getByPlaceholderText('Username'), 'johndoe');
    fireEvent.changeText(getByPlaceholderText('Password'), 'incorrectpassword');
    fireEvent.press(getByText('Log In'));
    const errorMessage = await waitFor(() => getByText('Invalid username or password'));
    expect(errorMessage).toBeDefined();
  });

  test('navigates to home screen and displays username after successful login', async () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);
    fireEvent.changeText(getByPlaceholderText('Username'), 'johndoe');
    fireEvent.changeText(getByPlaceholderText('Password'), 'correctpassword');
    fireEvent.press(getByText('Log In'));
    const welcomeMessage = await waitFor(() => getByText(`Welcome, johndoe!`));
    expect(welcomeMessage).toBeDefined();
  });
});
```

No primeiro teste, estamos simulando o preenchimento do formulário de login com credenciais inválidas e o clique no botão de login. Em seguida, usamos a função `waitFor` da Testing Library para aguardar até que a mensagem de erro seja exibida na tela, e verificamos se ela está definida usando o `expect(errorMessage).toBeDefined()`.

No segundo teste, estamos simulando o preenchimento do formulário de login com credenciais válidas e o clique no botão de login. Novamente, usamos a função `waitFor` para aguardar a exibição da mensagem de boas-vindas com o nome de usuário do usuário autenticado, e verificamos se ela está definida usando o `expect(welcomeMessage).toBeDefined()`.

## Como utilizar testes automatizados no seu projeto pessoal

Para utilizar testes automatizados em projetos React Native, é recomendável criar um diretório chamado "__tests__" na raiz do projeto e colocar os arquivos de teste dentro dele. Os nomes dos arquivos devem ter a extensão ".test.js" ou ".spec.js".

Com isso, podemos criar casos de teste para cada componente ou funcionalidade em nosso projeto. É importante lembrar que os testes automatizados devem ser executados continuamente durante o desenvolvimento para garantir a qualidade do software entregue.

Ao criar testes automatizados, é possível detectar erros antes mesmo deles acontecerem no ambiente de produção. Além disso, esses testes ajudam a simplificar o processo de debugging e refatoração do código, pois identificam rapidamente os pontos problemáticos.

Outra vantagem dos testes automatizados é que eles aumentam a confiança do desenvolvedor ao fazer alterações no código. Com a certeza de que os testes serão executados após as mudanças, o desenvolvedor pode ter mais segurança ao realizar alterações que poderiam causar problemas anteriormente.

Em resumo, a utilização de testes automatizados em projetos React Native é fundamental para garantir a qualidade do software entregue. Eles permitem que os desenvolvedores verifiquem se o código funciona corretamente, previnem erros de regressão, tornam o processo de debugging mais fácil e aumentam a confiança do desenvolvedor ao realizar alterações no código.
