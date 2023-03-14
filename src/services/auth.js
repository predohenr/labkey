import app from '../configs/firebase';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export function signIn(email, senha) {
  return new Promise(resolve => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
      const user = userCredential.user;
      resolve(user);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      resolve({});
    });
  });
};

export function signOutApp() {
  return new Promise(resolve => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
      resolve(true);
    }).catch((error) => {
      resolve(false);
    });
  });
  
};
