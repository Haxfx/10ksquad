'use client';

import { usePathname } from 'next/navigation';

export const useIsTeamPage = () => {
  const pathname = usePathname();
  return pathname === '/team';
};
