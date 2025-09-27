import Providers from "../providers";
import { Toaster } from "react-hot-toast";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="dark-mod">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
