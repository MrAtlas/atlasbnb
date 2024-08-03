'use client';
import React from 'react';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const router = useRouter();

  const login = async (email, password) => {
    try {
      const authData = await pb.collection('users').authWithPassword(email, password);

      setUser(authData.user); // Set the user state
      message.success('Login successful!');
      return authData.user; // Return the user credential on successful login
    } catch (error) {
      console.error("Login error:", error);
      let errorMessage = "Login failed. Please try again.";
      switch (error.message) {
        case 'Invalid login credentials':
          errorMessage = "Incorrect email or password. Please try again.";
          break;
        // Add other error cases as needed
        default:
          errorMessage = "An unexpected error occurred. Please try again later.";
          break;
      }
      message.error(errorMessage);
    }
  };

  const logOut = async () => {
    try {
      pb.authStore.clear(); // Clear the auth store
      setUser(null); // Reset the user state
      router.push('/auth/login');
      message.success("Logout successful!");
    } catch (error) {
      console.error("Logout error:", error);
      message.error("Logout failed. Please try again.");
    }
  };

  const register = async (email, password, username, name, phone) => {
    try {
      const user = await pb.collection("users").create({
        username: username,
        email: email,
        password: password,
        passwordConfirm: password,
        "emailVisibility": true,
        "name": name,
        "type": "client",
        "phone": phone
      });

      message.success('Registration successful!');
      return user;
    } catch (error) {
      console.error("Registration error:", error);
      message.error("Registration failed. Please try again.");
      return null;
    }
  };

  React.useEffect(() => {
    const getUserSession = () => {
      const user = pb.authStore.model;
      setUser(user || null);
    };

    getUserSession();

    const authStoreListener = pb.authStore.onChange((auth) => {
      setUser(auth.model || null);
    });

    return () => {
      authStoreListener();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
