import type { MetaFunction } from '@remix-run/node';
import MainContainer from '@containers/main';
import { META_PAGE } from '@constants/data/meta';

export const meta: MetaFunction = () => [
  // default seo
  { title: META_PAGE.default.title },
  { name: 'description', content: META_PAGE.default.description },
  { name: 'keywords', content: META_PAGE.default.keywords },
  { name: 'og:image', content: META_PAGE.default.ogImage },
];

export default function mainPage() {
  return <MainContainer />;
}
