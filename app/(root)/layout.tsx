import Footer from "@/components/ui/shared/Footer";
import Header from "@/components/ui/shared/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
    <div className="flex h-screen flex-col">
      <Header />
      <body className="flex-1">{children}</body>
      <Footer />
    </div>
    // </ClerkProvider>
  );
}
