import { Sidebar } from "@/components/sidebar";
import "../../globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased bg-linear-to-br w-full min-h-screen flex from-orange-50 to-orange-100`}
      >
        <Sidebar />
        <main className="w-full">
          <div className="p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}
