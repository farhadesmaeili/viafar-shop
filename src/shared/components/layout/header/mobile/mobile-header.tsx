import { Logo } from '@/shared/components/common';
import { Container } from '@/shared/components/layout';

import { MobileHeaderActions } from './components/mobile-header-actions';
import { MobileHeaderSearch } from './components/mobile-header-search';
import { MobileNavbar } from '@/shared/components/layout/navbar/mobile';

export function MobileHeader() {
  return (
    <div className="lg:hidden">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <MobileNavbar />

          <Logo className="text-xl" />

          <MobileHeaderActions />
        </div>

        <div className="pb-3">
          <MobileHeaderSearch />
        </div>
      </Container>
    </div>
  );
}
