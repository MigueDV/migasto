import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Config from 'react-native-config';

const firebaseConfig = {
  apiKey: "AIzaSyDDR4eBz1f-nxeI0Vg_ZUTioZ3a2jQZ9Xs",
  authDomain: "mi-gasto-app.firebaseapp.com",
  projectId: "mi-gasto-app",
  storageBucket: "mi-gasto-app.firebasestorage.app",
  messagingSenderId: "165113484634",
  appId: "1:165113484634:web:acb997bb7da7f932fc8f63",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Servicios de Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;