import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, headerProps, footerProps }) {
  return (
    <div className="container">
      <Header {...headerProps} />
      <main className="main-content">
        {children}
      </main>
      <Footer {...footerProps} />
    </div>
  );
}
