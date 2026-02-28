import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    
};

// Hindari initialize ulang saat hot reload
const app = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApps()[0];

export const auth = getAuth(app);