import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <a
        href="#main-content"
        className="fixed -top-16 left-4 z-[100] rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition-[top] focus:top-4 motion-reduce:transition-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
