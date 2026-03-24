import { Helmet } from 'react-helmet-async';
import { absoluteUrl } from '../config/site';

const DEFAULT_TITLE = 'Web3PHC | Building the Future of Web3';

/**
 * @param {object} props
 * @param {string} [props.title] - Short page title (becomes "Title | Web3PHC")
 * @param {string} props.description
 * @param {string} [props.image] - Path or absolute URL to share image
 * @param {string} [props.url] - Pathname (e.g. /reconfig) or full URL; canonical + og:url
 * @param {string} [props.type]
 * @param {object|object[]} [props.schemaData] - JSON-LD object(s)
 * @param {boolean} [props.noindex]
 */
const SEO = ({
  title,
  description,
  image = '/thumb.JPG',
  url = '/',
  type = 'website',
  schemaData,
  noindex = false,
}) => {
  const documentTitle = title ? `${title} | Web3PHC` : DEFAULT_TITLE;
  const canonicalHref = absoluteUrl(url);
  const ogImage = absoluteUrl(image);

  const schemaJson =
    schemaData == null
      ? null
      : JSON.stringify(
          Array.isArray(schemaData)
            ? { '@context': 'https://schema.org', '@graph': schemaData }
            : schemaData
        );

  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalHref} />
      {!noindex ? (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}

      <meta property="og:site_name" content="Web3PHC" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalHref} />
      <meta property="og:locale" content="en_NG" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={documentTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemaJson ? (
        <script type="application/ld+json">{schemaJson}</script>
      ) : null}
    </Helmet>
  );
};

export default SEO;
