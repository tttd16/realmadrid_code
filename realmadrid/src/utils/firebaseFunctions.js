import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase.config';

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, 'shopItems', `${Date.now()}`), data, {
    merge: true,
  });
};

// getall shop items
export const getAllShopItems = async () => {
  const items = await getDocs(query(collection(firestore, 'shopItems'), orderBy('id', 'desc')));

  return items.docs.map((doc) => doc.data());
};
