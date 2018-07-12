

import { AsyncStorage } from "react-native";

export const USER_KEY = "user-obj";
export const onSignIn = (obj) => AsyncStorage.setItem(USER_KEY, JSON.strigify(obj));

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(res);
        } else {
          resolve(null);
        }
      })
      .catch(err => reject(err));
  });
};