import { ReactNode, useContext, useEffect, useRef } from 'react';
import ServerStyleContext from '@styles/server';
import GlobalStyles from '@styles/global';
import ClientStyleContext from '@styles/client';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { withEmotionCache } from '@emotion/react';

interface DocumentProps {
  children: ReactNode;
  title?: string;
}

const Document = withEmotionCache(
  ({ children, title }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);
    const reInjectStylesRef = useRef(true);

    useEffect(() => {
      if (!reInjectStylesRef.current) {
        return;
      }
      emotionCache.sheet.container = document.head;
      const { tags } = emotionCache.sheet;
      emotionCache.sheet.flush();
      tags.forEach(tag => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      clientStyleData.reset();
      reInjectStylesRef.current = false;
    }, [clientStyleData, emotionCache.sheet]);

    return (
      <html lang="ko">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <GlobalStyles />
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  },
);

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
