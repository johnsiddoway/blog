---
title: 'Old Javascript and CSS Snippets'
date: '2019-02-14'
description: 'A collection of old code snippets from my Google Plus Account'
tags: javascript css miscellaneous
---

### Short Stuff
* [CSS Tricks: Scaling SVG](https://css-tricks.com/scale-svg/)

### FontAwesome and Tablesorter
This is custom CSS for [jquery.tablesorter.js](http://tablesorter.com/docs/) using [Font Awesome](http://fontawesome.io) icons instead of tablesorters default CSS. All it does is append up or down carets depending on the sorting. Very very lightweight CSS for a lightweight JQuery plugin. Stolen from [this Stack Overflow question](http://stackoverflow.com/questions/14736496/use-font-awesome-icons-in-css).

```css
table.tablesorter thead tr .headerSortUp:after {
position: relative;
right: -5px;
font-family: FontAwesome;
content: "\f0d7";
}
table.tablesorter thead tr .headerSortDown:after {
position: relative;
right: -5px;
font-family: FontAwesome;
content: "\f0d8";
}
```

### Silhouettes and Backgrounds
I couldn't think of a better title for this, but it's something I've seen a few places. Wasteland 2's original landing page was the first example I used. I had to go hit up the [Wayback Machine](https://archive.org/web/) to get a good snapshot of it. The header is a solid black .png with "Wasteland 2" cut out. This lets the background image to 'bleed through'. Same thing with the Battletech site; the silhouettes of the 'Mechs are layered over the other images, which are in turn layered over each other.

<img src="/assets/img/2019-02-14-wasteland-2.png" class="img-fluid" alt="Wasteland 2 Screenshot">

<img src="/assets/img/2019-02-14-battletech.png" class="img-fluid" alt="Battletech Screenshot">

```css
table.logo { width: 100%; }
table.logo { margin-bottom: 1em; } <!-- Optional -->
table.logo td { background-color: #000; }
table.logo th { width: 506px; } <!-- Any good looking px, em, or % -->
```

```html
<table class="logo">
    <tbody>
        <tr>
            <td></td>
            <th><img alt="Logo" class="img-responsive" src="assets/img/logo.png" /></th>
            <td></td>
        </tr>
    </tbody>
</table>
```

### Image Zoom Magnifying Glass
<a href="../2019-02-15-magnify/">Updated Article</a>

[Original Article](http://thecodeplayer.com/walkthrough/magnifying-glass-for-images-using-jquery-and-css3)

I made a small jQuery plugin out of the image magnification tool above. You just have to initialize it on the img elements to zoom on hover, with CSS class(es) that define how you want the magnifier to look. Note to self: I should post this as its own article at some point too.

Note: I assume that the original image source is the original, full-size image, and the original img element is scaled down via CSS. I didn't want to bother with a "full size" and a "thumbnail" image if I know I'm going to use the "full size" version eventually.

```css
.magnify-lens {
    position: absolute;
    display: none;
    z-index: 10;
    height: 150px;
    width: 150px;
    border-radius: 40%;
    box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.85),
                0 0 7px 7px rgba(0, 0, 0, 0.25),
          inset 0 0 40px 2px rgba(0, 0, 0, 0.25);
}
```

```html
<img src="..."/>
```

```javascript
$(document).ready(function() {
  $('img').magnify({magnifiedClass:'magnify-lens'})
});
```