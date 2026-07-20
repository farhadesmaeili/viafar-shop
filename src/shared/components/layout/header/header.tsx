import { DesktopHeader } from './desktop/desktop-header';
import { MobileHeader } from './mobile/mobile-header';

export function Header() {
  return (
    <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-4 z-50 mx-4 overflow-hidden rounded-2xl border shadow-sm backdrop-blur lg:mx-6">
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}
