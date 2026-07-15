import Logo from "@/components/shared/Logo";

import Container from "./Container";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <DesktopNavigation />

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}