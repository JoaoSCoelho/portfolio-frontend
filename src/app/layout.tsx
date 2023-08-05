import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { PropsWithChildren } from 'react';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Portfolio',
  },
  description: 'Portfolio de projetos de João Coelho',
  authors: { name: 'João Victor' },
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--poppins',
  subsets: ['latin'],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
