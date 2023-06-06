import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export interface KeyForLoan {
  value: string;
  label: string;
}

export const addLoanOnDataBase = async (
  name: string,
  contact: string,
  key: KeyForLoan
) => {
  const userId = auth().currentUser?.uid;
  firestore()
    .runTransaction(async () => {
      const date = firestore.FieldValue.serverTimestamp();
      firestore()
        .doc(`users/${userId}/keys/${key.value}`)
        .update({ available: false });
      firestore()
        .collection(`users/${userId}/loans`)
        .add({
          name: name,
          contact: contact,
          key_name: key.label,
          key_id: `users/${userId}/keys/${key.value}`,
          create_at: date,
          returned: false,
          returned_at: date,
        });
    })
    .then(() => {
      return Promise.resolve(true);
    })
    .catch(() => {
      return Promise.reject(true);
    });
};

export const addKeyOnDatabase = async (key: string) => {
  const userId = auth().currentUser?.uid;
  firestore()
    .collection(`users/${userId}/keys`)
    .add({
      name: key,
      available: true,
      create_at: firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      return Promise.resolve(true);
    })
    .catch(() => {
      return Promise.reject(true);
    });
};

export const updateLoan = async (id: string, idKey: string) => {
  const userId = auth().currentUser?.uid;
  firestore().runTransaction(async () => {
    const date = firestore.FieldValue.serverTimestamp();
    firestore().doc(idKey).update({ available: true });
    firestore()
      .doc(`users/${userId}/loans/${id}`)
      .update({ returned: true, returned_at: date })
      .then(() => {
        return Promise.resolve(true);
      })
      .catch(() => {
        return Promise.reject(true);
      });
  });
};

export const deleteKeyFromDatabase = async (id: string) => {
  const userId = auth().currentUser?.uid;
  firestore()
    .doc(`users/${userId}/keys/${id}`)
    .delete()
    .then(() => {
      return Promise.resolve(true);
    })
    .catch(() => {
      return Promise.reject(true);
    });
};

export const updatePassword = async (password: string) => {
  const userId = auth().currentUser?.uid;
  const userName = auth().currentUser?.displayName;

  firestore().runTransaction(async () => {
    const oldPassword = (await firestore().doc(`users/${userId}`).get()).data()
      ?.password_key;
    await firestore().doc(`users/${userId}`).update({ password_key: password });
    await firestore().doc(`password_keys/${oldPassword}`).delete();
    firestore()
      .collection('password_keys')
      .doc(password)
      .set({
        user_id: userId,
        user_name: userName,
      })
      .then(() => {
        return Promise.resolve(true);
      })
      .catch(() => {
        return Promise.reject(true);
      });
  });
};
