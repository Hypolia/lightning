import './global.css';

export const metadata = {
  title: 'Hypolia',
  description: 'Hypolia Minecraft Server Mini-Jeux',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
