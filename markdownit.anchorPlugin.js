// https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
// https://github.com/ambrwlsn/website/blob/da2056c316fa45fa58b443b07be1ac4c5080912e/helpers/markdown-anchor-wat.js
const icon = `#`;

const slugify = (s) =>
    encodeURIComponent(
        String(s)
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
    );

const defaultOptions = {
    anchorClass: 'anchor-link',
};

export default function anchor(md, options) {
    options = Object.assign({}, defaultOptions, options);

    md.renderer.rules.heading_open = function (tokens, index) {
        const contentToken = tokens[index + 1];
        const slug = slugify(contentToken.content);

        if (tokens[index].tag === 'h2') {
            return `<${tokens[index].tag} id="${slug}">`;
        }
        return `<${tokens[index].tag}>`;
    };

    md.renderer.rules.heading_close = function (tokens, index) {
        const contentToken = tokens[index - 1];
        const slug = slugify(contentToken.content);

        if (tokens[index].tag === 'h2') {
            return `<a class="${options.anchorClass}" href="#${slug}">
            <span aria-hidden="true">${icon}</span>
            <span class="hidden">Section titled ${contentToken.content}</span>
            </a>
            </${tokens[index].tag}>`;
        }
        return `</${tokens[index].tag}>`;
    };
};
