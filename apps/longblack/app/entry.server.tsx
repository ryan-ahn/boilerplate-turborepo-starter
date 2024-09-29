import { PassThrough } from 'node:stream';
import { renderToPipeableStream, renderToString } from 'react-dom/server';
import { isbot } from 'isbot';
import ServerStyleContext from '@styles/server';
import createEmotionCache from '@styles/cache';
import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/node';
import createEmotionServer from '@emotion/server/create-instance';
import { CacheProvider } from '@emotion/react';

const ABORT_DELAY = 5_000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return isbot(request.headers.get('user-agent') || '')
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      )
    : handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext,
      );
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    const { pipe, abort } = renderToPipeableStream(
      <ServerStyleContext.Provider value={null}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      </ServerStyleContext.Provider>,
      {
        onAllReady() {
          const initialHtml = renderToString(
            <ServerStyleContext.Provider value={null}>
              <CacheProvider value={cache}>
                <RemixServer context={remixContext} url={request.url} />
              </CacheProvider>
            </ServerStyleContext.Provider>,
          );
          const chunks = extractCriticalToChunks(initialHtml);
          const finalHtml = renderToString(
            <ServerStyleContext.Provider value={chunks.styles}>
              <CacheProvider value={cache}>
                <RemixServer context={remixContext} url={request.url} />
              </CacheProvider>
            </ServerStyleContext.Provider>,
          );

          const body = new PassThrough();
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(`<!DOCTYPE html>${finalHtml}`, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  return new Promise((resolve, reject) => {
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    const { pipe, abort } = renderToPipeableStream(
      <ServerStyleContext.Provider value={null}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      </ServerStyleContext.Provider>,
      {
        onShellReady() {
          const initialHtml = renderToString(
            <ServerStyleContext.Provider value={null}>
              <CacheProvider value={cache}>
                <RemixServer context={remixContext} url={request.url} />
              </CacheProvider>
            </ServerStyleContext.Provider>,
          );
          const chunks = extractCriticalToChunks(initialHtml);
          const finalHtml = renderToString(
            <ServerStyleContext.Provider value={chunks.styles}>
              <CacheProvider value={cache}>
                <RemixServer context={remixContext} url={request.url} />
              </CacheProvider>
            </ServerStyleContext.Provider>,
          );

          const body = new PassThrough();
          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(`<!DOCTYPE html>${finalHtml}`, {
              headers: responseHeaders,
              status: responseStatusCode,
            }),
          );
          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        },
      },
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
