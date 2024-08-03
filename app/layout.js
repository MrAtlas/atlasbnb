import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";

import { AuthProvider } from "./state/auth/auth-context";
import { ThemeProvider } from './state/theme/theme-context';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MetaTrading",
  description: "MetaTrading.ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AntdRegistry>
          <ThemeProvider>
            <AuthProvider>
              {children}
            </AuthProvider>
          </ThemeProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
