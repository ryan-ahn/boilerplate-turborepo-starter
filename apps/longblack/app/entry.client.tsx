import { hydrateRoot } from 'react-dom/client';
import { ReactNode, useCallback, useState } from 'react';
import ClientStyleContext from '@styles/client';
import createEmotionCache from '@styles/cache';
import { RemixBrowser } from '@remix-run/react';
import { CacheProvider } from '@emotion/react';

interface ClientCacheProviderProps {
  children: ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  const reset = useCallback(() => {
    setCache(createEmotionCache());
  }, []);

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrateRoot(
  document,
  <ClientCacheProvider>
    <RemixBrowser />
  </ClientCacheProvider>,
);
