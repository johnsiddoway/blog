---
title:  'CSS Style Testing'
date:  '2024-05-15'
description: 'First post'
layout: post.html
tags: posts
links:
 - <link rel="stylesheet" href="index.min.css">
---

This post is meant to be a test-bed for my personal SASS library that I plan on sharing across my personal sites. I plan on posting information on how it's supposed to work in a separate post (or maybe series of posts).

A hesitant shout-out to a recent article I read, [You Don't Need a CSS Framework](https://www.infoq.com/articles/no-need-css-framework/). I don't agree with several points made in the article, but the author's reference site, [starterapp.style](https://www.starterapp.style/), is really well laid out for showcasing how a stylesheet will render.

# Typography

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
anim id est laborum.

1. Some
1. List
1. Items

* Some
* List
* Items

# Buttons

<div class="flex-with-gap">
    <button>Default</button>
    <button class="btn-primary">Primary</button>
    <button class="btn-primary-inverted">Primary</button>
    <button class="btn-info">Info</button>
    <button class="btn-info-inverted">Info</button>
    <button class="btn-success">Success</button>
    <button class="btn-success-inverted">Success</button>
    <button class="btn-danger">Danger</button>
    <button class="btn-danger-inverted">Danger</button>
    <button class="btn-orange">Orange</button>
    <button class="btn-orange-inverted">Orange</button>
    <button class="btn-yellow">Yellow</button>
    <button class="btn-yellow-inverted">Yellow</button>
    <button class="btn-green">Green</button>
    <button class="btn-green-inverted">Green</button>
    <button class="btn-teal">Teal</button>
    <button class="btn-teal-inverted">Teal</button>
    <button class="btn-cyan">Cyan</button>
    <button class="btn-cyan-inverted">Cyan</button>
    <button class="btn-blue">Blue</button>
    <button class="btn-blue-inverted">Blue</button>
    <button class="btn-indigo">Indigo</button>
    <button class="btn-indigo-inverted">Indigo</button>
    <button class="btn-purple">Purple</button>
    <button class="btn-purple-inverted">Purple</button>
    <button class="btn-pink">Pink</button>
    <button class="btn-pink-inverted">Pink</button>
    <button class="btn-red">Red</button>
    <button class="btn-red-inverted">Red</button>
</div>

# Forms

<form>
  <fieldset>
    <legend>Example legend</legend>
    <fieldset>
        <label for="input">Example input</label>
        <input type="text" id="input" placeholder="Example input">
    </fieldset>
    <p>
      <label for="email">Example email</label>
      <input type="email" id="email" placeholder="test@example.com">
    </p>
    <p>
      <label for="tel">Example telephone</label>
      <input type="tel" id="tel">
    </p>
    <p>
      <label for="url">Example url</label>
      <input type="url" id="url">
    </p>
    <p>
      <label for="number">Example number</label>
      <input type="number" id="number">
    </p>
    <p>
      <label for="search">Example search</label>
      <input type="search" id="search">
    </p>
    <p>
      <label for="range">Example range</label>
      <input type="range" id="range" min="0" max="10">
    </p>
    <p>
      <label for="file">Example file input</label>
      <input type="file" id="file">
    </p>
    <p>
      <label for="select">Example select</label>
      <select id="select">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea">Example textarea</label>
      <textarea id="textarea" rows="3"></textarea>
    </p>
    <p>
      <label for="date">Example date</label>
      <input type="date" id="date">
    </p>
    <p>
      <label for="time">Example time</label>
      <input type="time" id="time">
    </p>
    <p>
      <label for="password">Example password</label>
      <input type="password" id="password">
    </p>
    <p>
      <label for="datetime-local">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local">
    </p>
    <p>
      <label for="week">Example week</label>
      <input type="week" id="week">
    </p>
    <p>
      <label for="month">Example month</label>
      <input type="month" id="month">
    </p>
    <p>
      <label for="color">Example color</label>
      <input type="color" id="color">
    </p>
    <p>
      <label for="output">Example output</label>
      <output name="result" id="output">100</output>
    </p>
    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="reset" value="Input reset button">
      <input type="button" value="Input button">
    </p>
    <p>
      <button type="submit" disabled>Button submit</button>
      <input type="submit" value="Input submit button" disabled>
      <input type="reset" value="Input reset button" disabled>
      <input type="button" value="Input button" disabled>
    </p>
  </fieldset>
</form>

# Tables

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

# Modals

<dialog>
    <article>
        <h2>Warning</h2>
        Are you absolutely sure?
    </article>
    <form method="dialog">
        <button value="no">No</button>
        <button value="yes">Yes</button>
    </form>
</dialog>
<p>Click <a href="javascript:document.querySelector('dialog').showModal()">here</a> to open the modal</p>

# Tooltips

<a href="javascript:{}" data-title="Here is some additional info">Hover over me</a> to see a tooltip.

<a href="javascript:{}" data-title="Here is some additional info. What do you think of it? I'd say it's very nice.">Hover over me</a> to see a tooltip with a ton of text.

# Abbreviations

The `<abbr>` element receives basic styling to make it stand out amongst paragraph text. You can pair this with Tooltips to customize the popup.

The <abbr title="Hypertext Markup Language">HTML</abbr> abbreviation element.

The <abbr data-title="Hypertext Markup Language">HTML</abbr> abbreviation element.

# Cards

<div class="card">
    <h2>Lorem ipsum</h2>

    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat, enim id efficitur porta,
        diam sem porta sapien, ut dignissim velit erat quis sapien. Nullam vulputate enim placerat tortor
        consequat, vulputate blandit nunc tempor. Integer purus augue, fringilla eu molestie in, consequat
        at turpis.
    </p>
</div>
<div class="card">
    <h2>Orci varius</h2>

    <p>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vel
        pulvinar orci, ac auctor urna. Nulla aliquam enim rutrum, auctor urna at, facilisis metus. Vivamus
        euismod arcu ut leo tincidunt auctor. Vestibulum auctor neque leo, vitae dignissim tellus lobortis
        vitae. Fusce vestibulum eleifend tortor et convallis. Aliquam congue nec ipsum id accumsan. Ut et
        sagittis velit. Vestibulum lacinia, diam vitae sodales euismod, nulla diam molestie velit, vitae
        iaculis neque nisl sit amet metus. Cras vehicula auctor fermentum.
    </p>
</div>
<div class="card">
    <h2>Mauris felis</h2>

    <p>
        Mauris felis lorem, condimentum vel lobortis et, condimentum eu libero. Fusce eget iaculis metus.
        Pellentesque quis ligula eget sem bibendum ultrices. Maecenas et ante id ex ultrices sagittis.
        Suspendisse malesuada eleifend arcu congue tempus. Pellentesque sed dictum ex. Pellentesque orci mi,
        vestibulum quis enim at, posuere iaculis neque.
    </p>
</div>

# Code

Code can be displayed inline with the <code>&lt;code&gt;</code> tag, or in a block

<pre><code>like this,
with &lt;pre&gt; and &lt;code&gt;</code></pre>

# Toggles

Toggles should be used for actions that take effect on click, as opposed to checkboxes, which should be used for actions that take effect when a form is submitted.

<label class="toggle">
    <input type="checkbox" name="turn-it-up-to-eleven">
    Turn it up to eleven
</label>

# Accordions

If a group of <code>&lt;details&gt;</code> elements all have the same <code>name</code> attribute, most browsers will only allow one of them to be open at a time. Firefox <a href="https://caniuse.com/mdn-html_elements_details_name">doesn't support this</a>, but it's supported by most other browsers, and degrades relatively gracefully.

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
    <ul>
        <li>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
        <li>Phasellus vel pulvinar orci, ac auctor urna.</li>
        <li>Nulla aliquam enim rutrum, auctor urna at, facilisis metus.</li>
    </ul>
</details>

<!-- # Sidebar

The starter's sidebar follows a pattern seen in many apps. On wide screens the sidebar is permanently displayed on the left side of the page and the page's content is displayed to its right. On narrower screens the sidebar is hidden by default, and is only displayed when a user clicks on the menu icon.

This layout is achieved with <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid">CSS Grid</a>, in particular <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas">grid template areas</a>. The default layout defines areas for each of the top-level layout elements, placing the <code>nav</code> in the <code>sidebar</code> area.

```css
body {
    grid-template-areas: 'header header'
                         'sidebar main'
                         'footer footer';
}

nav {
    grid-area: sidebar;
}
```

On small screens, we omit the sidebar from the grid layout and position the sidebar absolutely, using the <code>left</code> property to toggle its visibility.

```css
@media screen and (max-width: 800px) {
    body {
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
``` -->