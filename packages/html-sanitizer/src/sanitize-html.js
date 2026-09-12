import sanitize from 'sanitize-html';

export default function sanitizeHtml(html) {
  const allowedSchemesByTag = { a: ['https', 'mailto', 'tel'] };

  if (process.env.NODE_ENV === 'development') {
    allowedSchemesByTag.a.push['http'];
  }

  return sanitize(html, {
    allowedAttributes: { '*': ['style'], a: ['href'] },
    allowedSchemesByTag,
    allowedStyles: {
      '*': {
        color: [/^.*$/],
        'padding-inline-start': [/^.*$/],
        'padding-left': [/^.*$/],
        'text-align': [/^(left|center|right|justify)$/],
        'text-decoration': [/^underline$/],
      },
    },
    allowedTags: [
      'a',
      'blockquote',
      'code',
      'em',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'li',
      'ol',
      'p',
      'pre',
      's',
      'span',
      'strong',
      'sub',
      'sup',
      'ul',
    ],
  });
}
