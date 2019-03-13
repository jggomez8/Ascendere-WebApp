import { MarkedOptions } from 'marked';
import { MarkedRenderer } from 'ngx-markdown';

export function indevMarkedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.image = image;
  renderer.link = link;
  renderer.html = html;

  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };
}

function image(href: string, _: string, text: string) {
  return `
  <figure>
    <img alt="${text}" src="${href}">
  </figure>
  `;
}

function html(html) {
  // TODO: do something
  console.log(html);
  return html;
}

/**
 * Anchor styling
 */
function link(href: string, _: string, text: string) {
  // Validate if link has href
  if (!href) {
    return `<a class="disabled">${text}</a>`;
  }

  // Check if it's a file to place an icon
  let linkRegExp = new RegExp(
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
  );

  // check if link redirects outside the app
  if (href.match(linkRegExp)) {
    // Check if link refers to document
    const fileRegExp = RegExp('(.*?)\\.(xls|doc|pdf)$');
    // TODO: check if icon is museful or remove it
    let icon = href.match(fileRegExp) ? '📄' : '';

    // Navigate safely outside the app
    return `
    <a href="${href}" target="_blank" rel="noopener noreferrer">
      ${text} ${icon}
    </a>
    `;
  }

  // navigate inside the application
  return `<a href="${href}">${text}</a>`;
}
