import { LanguageSwitcher, ThemeToggle } from '@/shared/components/common';

export function MobileHeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
}
