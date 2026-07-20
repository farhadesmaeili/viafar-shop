import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { cn } from '@/shared/lib/utils';

type DesktopMegaMenuProps = {
  groups: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
};

export function DesktopMegaMenu({ groups }: DesktopMegaMenuProps) {
  const t = useTranslations('navigation');

  return (
    <div className="grid w-[600px] grid-cols-2 gap-8 p-6">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="mb-3 text-sm font-semibold">{t(group.title)}</h3>

          <div className="space-y-1">
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block rounded-md px-3 py-2 text-sm',
                  'hover:bg-muted hover:text-primary',
                )}
              >
                {t(item.title)}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
