import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/ThemeProvider.tsx"
import ScrollToTop from "@/components/ui/scroll-to-top"
import PageLoader from "@/components/ui/page-loader"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "AI Mock Interview - Practice and Ace Your Next Interview",
  description: "Practice with AI-powered mock interviews and get personalized feedback to land your dream job",
  keywords: "mock interview, AI interview, job preparation, interview practice, career development",
};

export default function RootLayout({ children }) {
  return (
    
    <ClerkProvider >
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <body className="font-sans antialiased">
          <Toaster position="top-center" />
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <PageLoader />
            {children}
            <ScrollToTop />
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
