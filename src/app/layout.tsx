import { Header } from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { AntDesignProvider } from './ui/AntDesignProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} p-6`}>
        <Header />
        <main>
          <AntDesignProvider>{children}</AntDesignProvider>
        </main>
      </body>
    </html>
  );
}
