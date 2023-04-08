import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: ['300', '400', '500', '700', '900'], });

export const metadata = {
  title: 'DevaByte Technologies',
  description: 'Providing quality and timely solutions for websites and mobile applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
