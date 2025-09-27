"use client"
import AuthProvider from "@/context/AuthContext";
import ReactQueryProvider from "./ReactQueryProvider";
import { DarkModeProvider } from "@/context/DarkModeContext";

const Providers = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <DarkModeProvider>
        {children}
        </DarkModeProvider>
      </AuthProvider>
    </ReactQueryProvider>
  );
};
export default Providers;
