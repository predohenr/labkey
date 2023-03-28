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
