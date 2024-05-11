---
title:  'CSS Style Testing'
date:  '2024-05-15'
description: 'First post'
layout: post.html
tags: posts
eleventyExcludeFromCollections: true
---

<section>
    This post is meant to be a test-bed for my personal SASS library that I plan on sharing across my personal sites. I plan on posting information on how it's supposed to work in a separate post (or maybe series of posts).

    A hesitant shout-out to a recent article I read, [You Don't Need a CSS Framework](https://www.infoq.com/articles/no-need-css-framework/). I don't agree with several points made in the article, but the author's reference site, [starterapp.style](https://www.starterapp.style/), is really well laid out for showcasing how a stylesheet will render.
</section>

<section id="typography">
    # Typography

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.
</p>

<ol class="numbered">
    <li>Some</li>
    <li>list</li>
    <li>items</li>
</ol>

<ul class="bulleted">
    <li>Some</li>
    <li>list</li>
    <li>items</li>
</ul>
</section>

<section id="forms">
<h1>Forms</h1>

<form action="#">
    <fieldset>
        <label>
            Name
            <input type="text" required name="name">
        </label>
        <label>
            Phone
            <input type="tel" required name="phone">
        </label>
        <label>
            Type
            <select name="phone-type">
                <option value="" disabled selected hidden>Select one...</option>
                <option value="mobile">Mobile</option>
                <option value="home">Home</option>
                <option value="work">Work</option>
            </select>
        </label>
    </fieldset>
    <fieldset class="vertical">
        <legend>Subscription</legend>
        <label class="radio"><input type="radio" name="subscription" value="free">Free</label>
        <label class="radio"><input type="radio" name="subscription" value="basic">Basic</label>
        <label class="radio"><input type="radio" name="subscription" value="pro">Pro</label>
    </fieldset>
    <fieldset>
        <label>
            Email
            <input type="email" required name="email">
        </label>
        <label>
            Password
            <input type="password" required name="password">
        </label>
    </fieldset>
    <fieldset>
        <label class="checkbox">
            <input type="checkbox" name="terms-and-conditions">
            <span>I agree to the <a href="#">terms and conditions</a></span>
        </label>
    </fieldset>
    <fieldset class="actions">
        <button class="secondary" type="button">Cancel</button>
        <button type="submit">Submit</button>
    </fieldset>
</form>

<h2>Inline form</h2>
<form action="#">
    <fieldset>
        <label>
            Search
            <input type="search" name="query">
        </label>
        <button type="submit">Search</button>
    </fieldset>
</form>
</section>

<section id="tables">
<h1>Tables</h1>
<div class="table-scroll-wrapper">
    <table>
        <thead>
        <tr>
            <th role="columnheader"></th>
            <th role="columnheader">Heading</th>
            <th role="columnheader">Heading</th>
            <th role="columnheader">Heading</th>
            <th role="columnheader">Heading</th>
            <th role="columnheader">Heading</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th role="rowheader">Row</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
        </tr>
        <tr>
            <th role="rowheader">Row</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
        </tr>
        <tr>
            <th role="rowheader">Row</th>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <th role="rowheader">Total</th>
            <td>Total</td>
            <td>Total</td>
            <td>Total</td>
            <td>Total</td>
            <td>Total</td>
        </tr>
        </tfoot>
    </table>
</div>
</section>

<section id="modals">
<h1>Modals</h1>

<dialog>
    <article>
        <h2>Warning</h2>
        Are you absolutely sure?
    </article>
    <footer>
        <form method="dialog">
            <fieldset class="actions">
                <button class="secondary" value="no">No</button>
                <button value="yes">Yes</button>
            </fieldset>
        </form>
    </footer>
</dialog>
<p>Click <a href="javascript:document.querySelector('dialog').showModal()">here</a> to open the modal</p>
</section>

<section id="tooltips">
<h1>Tooltips</h1>

<p>
    <a href="javascript:{}" data-tooltip="Here is some additional info">Hover over me</a> to see a tooltip.
</p>

<p>
    <a href="javascript:{}"
        data-tooltip="Here is some additional info. What do you think of it? I'd say it's very nice.">
        Hover over me
    </a> to see a tooltip with a ton of text.
</p>
</section>

<section id="cards">
<h1>Cards</h1>

<ul class="card-list">
    <li class="card">
        <h2>Lorem ipsum</h2>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta,
            diam sem porta sapien, ut dignissim velit erat quis sapien. Nullam vulputate enim placerat tortor
            consequat, vulputate blandit nunc tempor. Integer purus augue, fringilla eu molestie in, consequat
            at turpis.
        </p>
    </li>
    <li class="card">
        <h2>Orci varius</h2>

        <p>
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vel
            pulvinar orci, ac auctor urna. Nulla aliquam enim rutrum, auctor urna at, facilisis metus. Vivamus
            euismod arcu ut leo tincidunt auctor. Vestibulum auctor neque leo, vitae dignissim tellus lobortis
            vitae. Fusce vestibulum eleifend tortor et convallis. Aliquam congue nec ipsum id accumsan. Ut et
            sagittis velit. Vestibulum lacinia, diam vitae sodales euismod, nulla diam molestie velit, vitae
            iaculis neque nisl sit amet metus. Cras vehicula auctor fermentum.
        </p>
    </li>
    <li class="card">
        <h2>Mauris felis</h2>

        <p>
            Mauris felis lorem, condimentum vel lobortis et, condimentum eu libero. Fusce eget iaculis metus.
            Pellentesque quis ligula eget sem bibendum ultrices. Maecenas et ante id ex ultrices sagittis.
            Suspendisse malesuada eleifend arcu congue tempus. Pellentesque sed dictum ex. Pellentesque orci mi,
            vestibulum quis enim at, posuere iaculis neque.
        </p>
    </li>
</ul>
</section>

<section id="buttons">
<h1>Buttons</h1>

<fieldset>
    <button>Primary</button>
    <button class="loading">Primary</button>
    <button>
        <svg>
            <use xlink:href="images/icons.svg#table"></use>
        </svg>
        Primary
    </button>
    <button class="secondary">Secondary</button>
    <button class="secondary loading">Secondary</button>
    <button class="secondary">
        <svg>
            <use xlink:href="images/icons.svg#account"></use>
        </svg>
        Secondary
    </button>
    <button class="alert">Alert</button>
    <button class="alert loading">Alert</button>
    <button class="alert">
        <svg>
            <use xlink:href="images/icons.svg#dialog"></use>
        </svg>
        Alert
    </button>
</fieldset>
</section>
<section id="code">
<h1>Code</h1>

<p>
    Code can be displayed inline with the <code>&lt;code&gt;</code> tag, or in a block
</p>

<pre><code>like this,
with &lt;pre&gt; and &lt;code&gt;</code></pre>
</section>

<section id="toggles">
<h1>Toggles</h1>

<p>
    Toggles should be used for actions that take effect on click, as opposed to checkboxes, which should be used
    for actions that take effect when a form is submitted.
</p>

<fieldset>
    <label class="toggle">
        <input type="checkbox" name="turn-it-up-to-eleven">
        Turn it up to eleven
    </label>
</fieldset>
</section>

<section id="flash-messages">
<h1>Flash messages</h1>

<fieldset>
    <button onclick="flash('This is a flash message')">Display message</button>
    <button onclick="flash('This is an alert message', true)" class="alert">Display alert</button>
</fieldset>
</section>

<section id="accordions">
<h1>Accordions</h1>

<p>
    If a group of <code>&lt;details&gt;</code> elements all have the same <code>name</code> attribute, most
    browsers will only allow one of them to be open at a time.
    Firefox <a href="https://caniuse.com/mdn-html_elements_details_name">doesn't support this</a>, but it's
    supported by most other browsers, and degrades relatively gracefully.
</p>

<details name="accordion-demo">
    <summary>
        This is an accordion summary
    </summary>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta, diam
        sem porta sapien, ut dignissim velit erat quis sapien.
        Nullam vulputate enim placerat tortor consequat, vulputate blandit nunc tempor.
        Integer purus augue, fringilla eu molestie in, consequat at turpis.
    </p>
</details>

<details name="accordion-demo">
    <summary>
        This is another accordion summary
    </summary>
    <ul class="bulleted">
        <li>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
        <li>Phasellus vel pulvinar orci, ac auctor urna.</li>
        <li>Nulla aliquam enim rutrum, auctor urna at, facilisis metus.</li>
    </ul>
</details>
</section>

<section id="theming">
<h1>Theming</h1>

<p>
    The <a href="./css/theme.css">theme.css</a> file contains colors, icons, and other variables that make up
    this site's theme.
</p>

<h2>Variables</h2>

<p>
    Theme variables are defined on <code>:root</code> so they can be used in all elements.
    Color variables are at the top of the <code>:root</code> styles. These define all colors to be used in the
    CSS files. Color variables must only be used in the theme file, and should not be imported from other CSS
    files.
</p>

<p>
    Below the color variable we define variables like <code>--text-color</code> and <code>--border-color</code>
    that we intend to use in other CSS files. These variables should reference color variables, and define our
    default theme. We can define an alternate theme (with <code>@media (prefers-color-scheme: dark)</code>,
    perhaps) by overriding these variables.
</p>

<pre><code>:root {
/* Color variables */
--white: #EEEEEE;
--black: #333333;

/* Default theme variables */
--text-color: var(--black);
--background-color: var(--white);
}

@media (prefers-color-scheme: dark) {
:root {
/* Dark theme variables */
--text-color: var(--white);
--background-color: var(--black);
}
}</code></pre>

<h2>Browser theme</h2>

<p>
    Set the <code>accent-color</code> property on the <code>html</code> tag so checkboxes and outlines match
    your site's theme.
</p>

<pre><code>html {
accent-color: var(--primary);
}</code></pre>

<p>
    Add a meta tag that sets the theme color to the <code>head</code> of your document to style browser chrome
    when a user visits your site.
</p>

<pre><code>&lt;meta name="theme-color" content="#196EC2"/&gt;</code></pre>
</section>

<section id="icons">
<h1>Icons</h1>

<p>
    Use SVG icons whenever possible and practical. They can scale to any size, accept
    CSS styles, and are usually smaller that other image formats.
</p>

<h2>Variables</h2>
<p>
    To use our theme's CSS variables in SVG icons, we have to include SVGs into the page a bit differently.
    The usual method on an image tag doesn't work, because the SVGs aren't a part of the DOM.
</p>

<pre><code>&lt;img src="/images/spinner.svg" alt="loading"&gt;</code></pre>

<p>
    Instead, we must include the full SVG directly with an <code>&lt;svg&gt;</code> tag or reference from an
    <code>&lt;svg&gt;</code> tag using a <code>&lt;use&gt;</code> tag.
</p>

<pre><code>&lt;svg&gt;
&lt;use xlink:href="/images/spinner.svg#icon"&gt;&lt;/use&gt;
&lt;/svg&gt;</code></pre>

<p>
    This ensures that the SVG is a part of the DOM, so will be able to use our CSS variables. If we use our
    theme's CSS variables to style our SVGs we'll be able to use the same icons for different themes (light and
    dark mode, for example).
</p>

<h2>Sprites</h2>

<p>
    This site uses <a href="./images/icons.svg">an SVG sprite file</a> to include many SVGs in one file. This
    helps a bit with performance since the browser makes fewer requests to load icons and can help when changing
    multiple icons at once. It's very cumbersome to reference SVG sprites in a CSS file, so we use separate
    files for SVGs referenced from CSS.
</p>
</section>

<section id="favicon">
<h1>Favicon</h1>

<p>
    The starter uses an SVG favicon for modern browsers and provides an ico fallback for
    <a href="https://caniuse.com/link-icon-svg">browsers without SVG favicon support</a> (like Safari and IE).
    The <a href="favicon.svg">SVG favicon</a> uses a <code>@media (prefers-color-scheme: dark)</code> query to
    serve a different color favicon depending on the user's color scheme. The
    <a href="favicon.ico">ico favicon</a> consists of a dark icon on a light background so that it displays well
    on any background color.
</p>
</section>

<section id="sidebar">
<h1>Sidebar</h1>

<p>
    The starter's sidebar follows a pattern seen in many apps. On wide screens the sidebar is permanently
    displayed on the left side of the page and the page's content is displayed to its right. On narrower screens
    the sidebar is hidden by default, and is only displayed when a user clicks on the menu icon.
</p>

<p>
    This layout is achieved with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid">CSS Grid</a>,
    in particular <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas">grid template
    areas</a>. The default layout defines areas for each of the top-level layout elements, placing the
    <code>nav</code> in the <code>sidebar</code> area.
</p>

<pre><code>body {
...
grid-template-areas: 'header header'
                    'sidebar main'
                    'footer footer';
}

nav {
grid-area: sidebar;
}</code></pre>

<p>
    On small screens, we omit the sidebar from the grid layout and position the sidebar absolutely, using the
    <code>left</code> property to toggle its visibility.
</p>

<pre><code>@media screen and (max-width: 800px) {
body {
...
grid-template-areas: 'header'
                        'main'
                        'footer';
}

nav {
grid-area: unset;
position: absolute;
top: var(--header-height);
bottom: 0;
left: calc(-1 * var(--nav-width));
}

.menu-open nav {
left: 0;
}
}
</code></pre>
</section>