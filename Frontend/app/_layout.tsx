import { Stack, usePathname } from 'expo-router';
import { FooterBar } from '../components/FooterBar';
import "../global.css";

export default function Layout() {
  const pathname = usePathname();

  // No mostrar footer en login y presentacion
  const noFooterRoutes = ['/login', '/'];

  const showFooter = !noFooterRoutes.includes(pathname);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {showFooter && <FooterBar />}
    </>
  );
}

