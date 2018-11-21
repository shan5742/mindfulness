import { auth } from './Firebase;

export const createUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

  export const signOut = () =>
  auth.signOut();