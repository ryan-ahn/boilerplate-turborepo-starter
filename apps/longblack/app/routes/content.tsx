import type { MetaFunction } from '@remix-run/node';
import ContentContainer from '@containers/content/index';
import { META_PAGE } from '@constants/data/meta';

export const meta: MetaFunction = () => [
  // page seo
  { title: META_PAGE.content.title },
  { name: 'description', content: META_PAGE.content.description },
  { name: 'keywords', content: META_PAGE.content.keywords },
  { name: 'og:image', content: META_PAGE.content.ogImage },
];

export default function contentPage() {
  return <ContentContainer />;
}
