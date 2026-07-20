import { LanguageSwitcher, ThemeToggle } from '@/shared/components/common';

export function DesktopHeaderActions() {
  return (
    <div className="flex items-center gap-2">
      {/* Theme */}
      <ThemeToggle />

      {/* Language */}
      <LanguageSwitcher />

      {/* Future Actions */}
      {/* Wishlist */}
      {/* Cart */}
      {/* Notification */}
      {/* User Menu */}
    </div>
  );
}
