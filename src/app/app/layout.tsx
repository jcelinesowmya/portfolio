import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
  title: "Celine Sowmya Portfolio",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}