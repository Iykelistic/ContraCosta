import ScrollProgress from "./components/ScrollProgress";
import "./globals.css";

export const metadata = {
  title: "Contra Costa",
  description: "Contra Costa — construction and engineering",
  icons: {
    icon: [{ url: "/images/ContraCostaLogo.jpeg", type: "image/jpeg" }],
    shortcut: "/images/ContraCostaLogo.jpeg",
    apple: "/images/ContraCostaLogo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playwrite+IN+Guides&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Special+Gothic+Expanded+One&display=swap"
        />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="btn-cta sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-200 focus:px-4 focus:py-2.5 focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
