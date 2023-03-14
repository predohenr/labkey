import auth from '@react-native-firebase/auth';

export function signIn(email, senha) {
  return new Promise(resolve => {
    auth()
    .signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve({status: true, data: user});
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const data = {errorCode: errorCode, errorMessage: errorMessage}
      resolve({status: false, data: data});
    });
  });
};

export function signOutApp() {
  return new Promise(resolve => {
    auth().signOut()
    .then(() => {
      resolve(true);
    }).catch((error) => {
      resolve(false);
    });
  });
  
};
