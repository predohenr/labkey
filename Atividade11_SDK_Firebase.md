Compatibilidade com react native
* O Firebase é digno do aplicativo escalável quando você deseja transferir seu aplicativo para vários usuários ao mesmo tempo sem ter que se preocupar com interrupções. No firebase, os dados são veiculados e sincronizados muito rapidamente, para que os usuários possam acessar facilmente arquivos e dados em todo o mundo.
Além disso, o Firebase também oferece hospedagem na web com CDN gratuito, armazenamento em nuvem e SSL. Isso coloca o Firebase à frente dos bancos de dados tradicionais e locais.


Instalação do SDK no projeto
1. Cria o projeto no site do firebase.
2. Gera o arquivo de configuração com android, ios ou web.
(Para android):
3. Colocar o arquivo ```google-services.json``` na pasta ```/android/app/``` do projeto.
4. Adicionar ```classpath 'com.google.gms:google-services:4.3.15'``` no arquivo ```/android/build.gradle``` dentro dependências do buildscript.
5. Adicionar apply plugin: ```'com.google.gms.google-services'``` no arquivo ```/android/app/build.gradle```.
6. Após essas configurações, basta buildar o projeto e ele terá acesso ao banco de dados.


Como utilizar o SDK para realizar as principais operações no BaaS, com React Native
1. Instalar o sdk do react native firebase com o seguinte comando  
    ```npm install --save @react-native-firebase/app```
2. No arquivo importar da biblioteca @react-native-firebase/auth o auth  
    ```import auth from '@react-native-firebase/auth';```
3. Para usar as funcionalidades de autenticação devemos habilitar a autenticação no console do projeto no firebase.
No SDK, como exemplo de principais operações temos: 
1. Logar com email e senha  
 ```
 auth().signInWithEmailAndPassword(email, senha);
 auth().signInAnonymously()
useEffect(() => {
    const subscriber = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        const checkLoading = () => loading && setLoading(false);
        checkLoading();
      }
    });
    return subscriber;
  }, []);
  ```
Deslogar:  
 ```auth().signOut()```   
Criar entrada no banco de dados:  
```firestore().collection('Chaves').add({
      name: 'k04',
      available: true,
      create_at: firestore.FieldValue.serverTimestamp(),
    })
```
Ler do banco de dados:  
```import firestore from '@react-native-firebase/firestore';
firestore().collection('Users'); //lê uma coleção```


```firestore().collection('Chaves').doc('j04'); //lê um documento de uma coleção```


Atualizar entrada no banco de dados:
```firestore().doc('Chaves/iayshfodsfhg').update({ available: true });
useEffect(() => { //se tiver uma mudança em uma coleção, atualiza automaticamente dentro da aplicação
    const subscriber = firestore().
      .collection('Chaves')
      .onSnapshot(documentSnapshot => {
        console.log('Key data: ', documentSnapshot.data());
      });
    return () => subscriber();
  }, [userId]);
```

Remover do banco:   
```firestore().doc('Chaves/iayshfodsfhg').delete()```   
