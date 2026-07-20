import { Logo } from '@/shared/components/common';
import { Container } from '@/shared/components/layout';
import { Navbar } from '@/shared/components/layout/navbar';

import { DesktopHeaderActions } from './components/desktop-header-actions';
import { DesktopHeaderSearch } from './components/desktop-header-search';

export function DesktopHeader() {
  return (
    <div className="hidden lg:block">
      <Container>
        <div className="flex h-18 items-center gap-6">
          <Logo />

          <DesktopHeaderSearch />

          <DesktopHeaderActions />
        </div>
      </Container>

      <Navbar />
    </div>
  );
}
