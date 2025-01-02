import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Product Listing',
  description: 'A modern product listing page with categories'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mt-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
