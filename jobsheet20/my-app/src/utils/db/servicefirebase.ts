import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);
const USERS_COLLECTION = "users";

type UserRole = "member" | "editor" | "admin";

type RegisterUserData = {
  email: string;
  fullname: string;
  password: string;
  role: string;
};

type OAuthUserData = {
  fullname: string;
  email: string;
  image?: string;
  type?: string;
  role?: string;
};

type ServiceResult = {
  status: boolean | "success" | "error";
  message: string;
  data?: any;
};

const mapSnapshotDocs = (snapshot: any) =>
  snapshot.docs.map((item: any) => ({
    id: item.id,
    ...item.data(),
  }));

const getUserByEmail = async (email: string) => {
  const q = query(collection(db, USERS_COLLECTION), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = mapSnapshotDocs(querySnapshot);
  return data[0] || null;
};

const normalizeRegisterRole = (role?: string): UserRole => {
  if (role === "editor") return "editor";
  return "member";
};

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = mapSnapshotDocs(snapshot);
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(
  email: string) {
  return await getUserByEmail(email);
}

export async function signUp(
  userData: RegisterUserData,
  callback: (result: any) => void,
) {

  if (!userData.email) {
    return callback({
      status: "error",
      message: "Invalid email format",
    });
  }

  if (!userData.password || userData.password.length < 6) {
    return callback({
      status: "error",
      message: "Password must be at least 6 characters long",
    });
  }

  const existingUser = await getUserByEmail(userData.email);

  if (existingUser) {
    callback({
      status: "error",
      message: "Email already exists",
    });
  } else {
  userData.password = await bcrypt.hash(userData.password, 10);
  userData.role = normalizeRegisterRole(userData.role);
  await addDoc(collection(db, USERS_COLLECTION), userData)
    .then(() => {
      callback({
        status: "success",
        message: "User registered successfully",
      });
    })
    .catch((error) => {
      callback({
        status: "error",
        message: error.message,
      });
    });
  }
}

export async function signInWithOAuth(
  userData: OAuthUserData,
  callback: (result: ServiceResult) => void,
  providerLabel: string,
) {
  try {
    const existingUser = await getUserByEmail(userData.email);

    if (existingUser) {
      userData.role = existingUser.role;
      await updateDoc(doc(db, USERS_COLLECTION, existingUser.id), userData);
      callback({
        status: true,
        message: `User logged in with ${providerLabel}`,
        data: userData,
      });
    } else {
      userData.role = "member";
      await addDoc(collection(db, USERS_COLLECTION), userData);
      callback({
        status: true,
        message: `User registered and logged in with ${providerLabel}`,
        data: userData,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: error?.message || `Failed to authenticate user with ${providerLabel}`,
    });
  }
}

export async function signInWithGoogle(userData: OAuthUserData, callback: any) {
  return signInWithOAuth(userData, callback, "Google");
}