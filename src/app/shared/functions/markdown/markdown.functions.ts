import { MarkedOptions } from 'marked';
import { MarkedRenderer } from 'ngx-markdown';

export function indevMarkedOptionsFactory(): MarkedOptions {
  const renderer = new MarkedRenderer();

  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };
  renderer.image = (href: string, title: string, text: string) => {
    console.log({ href, title, text });
    return `
    <figure>
      <img alt="${text}" src="${href}">
    </figure>
    `;
  };

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
