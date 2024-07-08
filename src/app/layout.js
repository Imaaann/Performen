import "./global.css"
import Footer from "./Components/Footer";
import ThemeProvider from "./Components/ThemeContext";
import UserContext from "./Components/UserContext";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body id="Page" className="reset">
        <UserContext>
          <ThemeProvider>
            <div className="main-container">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </UserContext>
      </body>
    </html>
  );
}
