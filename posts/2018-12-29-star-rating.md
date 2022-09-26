---
layout: post
title: 'Star Rating'
date: '2018-12-29'
description: 'Creating a basic star rating using some custom CSS and Font Awesome 5'
tags: css font-awesome-5
custom-js:
    - "assets/js/star-rating.js"
custom-css:
    - "assets/css/star-rating.css"
---
On Font Awesome's [4.7 Examples](https://fontawesome.com/v4.7.0/examples/) page, they included an example of how to implement a basic star rating using their `star` icon. They also linked out to [this great article](https://css-tricks.com/star-ratings/). When Font Awesome 5 came out, I noticed that their docs didn't include an Example page anymore, so I thought I'd recreate this simple feature.

### Demo

You can also see this on [CodePen](https://codepen.io/pezmotion/pen/RQERdm)

<div class="rating" style="width: 20rem">
    <input id="rating-5" type="radio" name="rating" value="5"/><label for="rating-5"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-4" type="radio" name="rating" value="4"/><label for="rating-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-3" type="radio" name="rating" value="3" checked /><label for="rating-3"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-2" type="radio" name="rating" value="2"/><label for="rating-2"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-1" type="radio" name="rating" value="1"/><label for="rating-1"><i class="fas fa-2x fa-star"></i></label>
</div>
Current Rating: <span id="star-value"></span>

### Explanation
There are two basic CSS features being used here. We are listing out the inputs highest to lowest value, but then setting the directionality of the items so that they render lowest to highest. This lets us use a subsequent sibling selector to style the lower values the same as the currently-selected value.

#### Directionality override
> HTML
{:.filename}
```html
<div class="rating">
    <input id="rating-5" type="radio" name="rating" value="5"/>
    <input id="rating-4" type="radio" name="rating" value="4"/>
    <input id="rating-3" type="radio" name="rating" value="3" checked />
    <input id="rating-2" type="radio" name="rating" value="2"/>
    <input id="rating-1" type="radio" name="rating" value="1"/>
</div>
```

> CSS
{:.filename}
```css
.rating {
    direction: rtl;
    unicode-bidi: bidi-override;
}
```

Star Ratings are typically viewed with the lowest score on the left, and the highest score on the right. In our case, 1 to 5. By setting this to "right to left" and then putting our elements highest-to-lowest when we define them, they are *rendered* left to right. By itself this isn't that useful. Here's what our Star Ratings would look like without it, though:

<div class="rating-ltr" style="width: 20rem">
    <input id="rating-ltr-5" type="radio" name="rating-ltr" value="5"/><label for="rating-ltr-5"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-ltr-4" type="radio" name="rating-ltr" value="4"/><label for="rating-ltr-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-ltr-3" type="radio" name="rating-ltr" value="3" checked /><label for="rating-ltr-3"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-ltr-2" type="radio" name="rating-ltr" value="2"/><label for="rating-ltr-2"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-ltr-1" type="radio" name="rating-ltr" value="1"/><label for="rating-ltr-1"><i class="fas fa-2x fa-star"></i></label>
</div>
Current Rating: <span id="star-ltr-value"></span>  <span class="text-muted"><em>Note: this is still using the next feature. It's just had it's directonality left at the default (left-to-right)</em></span>

#### Subsequent-sibling combinator
> CSS
{:.filename}
```css
.rating label:hover,
.rating label:hover ~ label,
.rating input:checked + label,
.rating input:checked + label ~ label {
    color: #ffc107;
}
```

The `.rating input:checked + label` line uses the `+` selector to set **just** the label immediately after the checked radio button, which is the current value.

The `.rating input:checked + label ~ label` line uses the `~` selector, which is the Subsequent-sibling selector. In general, this selects everything between the left operand and the right. In our specific use case, this selects all labels **after** the currently-selected label. This is used to style the values "lower than" the currently selected rating. Without this selector we would only highlight the current rating, which isn't what your users are going to expect.

The `.rating label:hover` line and the `.rating label:hover ~ label` are used to apply the same style to "possible" star ratings. For the example below, I've removed these lines as well.

<div class="rating-single" style="width: 20rem">
    <input id="rating-single-5" type="radio" name="rating-single" value="5"/><label for="rating-single-5"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-single-4" type="radio" name="rating-single" value="4"/><label for="rating-single-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-single-3" type="radio" name="rating-single" value="3" checked /><label for="rating-single-3"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-single-2" type="radio" name="rating-single" value="2"/><label for="rating-single-2"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-single-1" type="radio" name="rating-single" value="1"/><label for="rating-single-1"><i class="fas fa-2x fa-star"></i></label>
</div>
Current Rating: <span id="star-single-value"></span> <span class="text-muted"><em>Note: this is still using the directionality feature. It's just had its selectors trimmed down to just the currently-selected rating value</em></span>

#### All Together
>HTML
{:.filename}
```html
<div class="rating">
    <input id="rating-5" type="radio" name="rating" value="5"/>
    <label for="rating-5"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-4" type="radio" name="rating" value="4"/>
    <label for="rating-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-3" type="radio" name="rating" value="3" checked />
    <label for="rating-3"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-2" type="radio" name="rating" value="2"/>
    <label for="rating-2"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-1" type="radio" name="rating" value="1"/>
    <label for="rating-1"><i class="fas fa-2x fa-star"></i></label>
</div>
```

>CSS
{:.filename}
```css
 /* Color here is used for labels higher than your current value. */
 /* Color choice is up to you */
.rating {
    direction: rtl;
    unicode-bidi: bidi-override;
    color: #ddd;
}

 /* Hides the standard radio inputs */
.rating input {
    display: none;
}

 /* Sets the color of both current value and "potential" value via :hover */
 /* Again, color choice is up to you. I borrowed Bootstrap's "yellow"     */
.rating label:hover,
.rating label:hover ~ label,
.rating input:checked + label,
.rating input:checked + label ~ label {
    color: #ffc107;
}
```

<div class="rating" style="width: 20rem">
    <input id="rating-final-5" type="radio" name="rating-final" value="5"/><label for="rating-final-5"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-final-4" type="radio" name="rating-final" value="4"/><label for="rating-final-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="rating-final-3" type="radio" name="rating-final" value="3" checked /><label for="rating-final-3"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-final-2" type="radio" name="rating-final" value="2"/><label for="rating-final-2"><i class="fas fa-2x fa-star"></i></label>
	<input id="rating-final-1" type="radio" name="rating-final" value="1"/><label for="rating-final-1"><i class="fas fa-2x fa-star"></i></label>
</div>
Current Rating: <span id="star-final-value"></span>

#### Javascript
If you are including the star rating in a form with an explicit `submit` button, then the currently selected value will automatically get posted along with the rest of the form inputs.  But maybe you want to do some custom event handling, like handling the rating asynchronously without reloading the page. On this page, for example, I'm displaying the currently selected rating below the stars. The javascript for that is fairly straight-forward:

>javascript
{:.filename}
```javascript
$(document).ready(function() { // using jQuery is not required
    // on page load, display the default value
    var currentValue = $('input[name="rating"]:checked').val();
    $('#star-value').text(currentValue);

    // add event listener 
    $('input[name="rating"]').change(function(){
        $('#star-value').text(this.value);
    });
});
```

Or, for the [VanillaJS](http://vanilla-js.com/) crowd:
>javascript
{:.filename}
```javascript
document.addEventListener("DOMContentLoaded", function() {
    // on page load, display the default value
    var currentValue = document.querySelector('input[name="rating"]:checked').value;
    document.getElementById('star-value').innerHTML = currentValue;

    var ratings = document.getElementsByName("rating");
    for (var i = 0; i < ratings.length; i++) {
        ratings[i].onchange = function() {
            $('#star-value').text(this.value);
        };
    }
});
```

### Resources
* [CodePen Version](https://codepen.io/pezmotion/pen/RQERdm)
* [Font Awesome 4.7 Example](https://fontawesome.com/v4.7.0/examples/#custom)
* [CSS Tricks Article](https://css-tricks.com/star-ratings/)
* [Lea Verou's Blog Post](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/) (*Note: her example no longer works*)
* [Mozilla docs on Radio Inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
