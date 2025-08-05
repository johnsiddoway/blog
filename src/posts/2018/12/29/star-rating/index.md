---
title: 'Star Rating'
date: '2018-12-29'
description: 'Creating a basic star rating using some custom CSS and Font Awesome 5'
layout: post.html
tags: posts
links:
 - <link rel="stylesheet" href="index.min.css">
 - <script type="module" crossorigin defer src="index.js"></script>
 - <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
---

On Font Awesome's [4.7 Examples](https://fontawesome.com/v4.7.0/examples/) page, they included an example of how to implement a basic star rating using their `star` icon. They also linked out to [this great article](https://css-tricks.com/star-ratings/). When Font Awesome 5 came out, I noticed that their docs didn't include an Example page anymore, so I thought I'd recreate this simple feature.

## Demo

You can also see this on [CodePen](https://codepen.io/pezmotion/pen/RQERdm)

<div class="rating" id="example-one">
    <input id="example-one-5" type="radio" name="example-one" value="5"/><label for="example-one-5"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-one-4" type="radio" name="example-one" value="4"/><label for="example-one-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-one-3" type="radio" name="example-one" value="3" checked /><label for="example-one-3"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-one-2" type="radio" name="example-one" value="2"/><label for="example-one-2"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-one-1" type="radio" name="example-one" value="1"/><label for="example-one-1"><i class="fas fa-2x fa-star"></i></label>
</div>
<div>
    Current Rating: <span id="example-one-value"></span>
</div>

## Explanation
There are two basic CSS features being used here. We are listing out the inputs highest to lowest value, but then setting the directionality of the items so that they render lowest to highest. This lets us use a subsequent sibling selector to style the lower values the same as the currently-selected value.

### Directionality override
```html
<div class="rating">
    <input id="rating-5" type="radio" name="rating" value="5"/>
    <input id="rating-4" type="radio" name="rating" value="4"/>
    <input id="rating-3" type="radio" name="rating" value="3" checked />
    <input id="rating-2" type="radio" name="rating" value="2"/>
    <input id="rating-1" type="radio" name="rating" value="1"/>
</div>
```

```css
.rating {
    direction: rtl;
    unicode-bidi: bidi-override;
}
```

Star Ratings are typically viewed with the lowest score on the left, and the highest score on the right. In our case, 1 to 5. By setting this to "right to left" and then putting our elements highest-to-lowest when we define them, they are *rendered* left to right. By itself this isn't that useful. Here's what our Star Ratings would look like without it, though:

<div class="rating-ltr" id="example-two">
    <input id="example-two-5" type="radio" name="example-two" value="5"/><label for="example-two-5"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-two-4" type="radio" name="example-two" value="4"/><label for="example-two-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-two-3" type="radio" name="example-two" value="3" checked /><label for="example-two-3"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-two-2" type="radio" name="example-two" value="2"/><label for="example-two-2"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-two-1" type="radio" name="example-two" value="1"/><label for="example-two-1"><i class="fas fa-2x fa-star"></i></label>
</div>
<div>
    Current Rating: <span id="example-two-value"></span>
    <span class="text-muted"><em>Note: this is still using the next feature. It's just had it's directonality left at the default (left-to-right)</em></span>
</div>

### Subsequent-sibling combinator
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

<div class="rating-single" id="example-three">
    <input id="example-three-5" type="radio" name="example-three" value="5"/><label for="example-three-5"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-three-4" type="radio" name="example-three" value="4"/><label for="example-three-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-three-3" type="radio" name="example-three" value="3" checked /><label for="example-three-3"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-three-2" type="radio" name="example-three" value="2"/><label for="example-three-2"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-three-1" type="radio" name="example-three" value="1"/><label for="example-three-1"><i class="fas fa-2x fa-star"></i></label>
</div>
<div>
    Current Rating: <span id="example-three-value"></span>
    <span class="text-muted"><em>Note: this is still using the directionality feature. It's just had its selectors trimmed down to just the currently-selected rating value</em></span>
</div>

### All Together
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

<div class="rating" id="example-four">
    <input id="example-four-5" type="radio" name="example-four" value="5"/><label for="example-four-5"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-four-4" type="radio" name="example-four" value="4"/><label for="example-four-4"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-four-3" type="radio" name="example-four" value="3" checked /><label for="example-four-3"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-four-2" type="radio" name="example-four" value="2"/><label for="example-four-2"><i class="fas fa-2x fa-star"></i></label>
    <input id="example-four-1" type="radio" name="example-four" value="1"/><label for="example-four-1"><i class="fas fa-2x fa-star"></i></label>
</div>
<div>
    Current Rating: <span id="example-four-value"></span>
</div>

### Javascript
If you are including the star rating in a form with an explicit `submit` button, then the currently selected value will automatically get posted along with the rest of the form inputs.  But maybe you want to do some custom event handling, like handling the rating asynchronously without reloading the page. On this page, for example, I'm displaying the currently selected rating below the stars. The javascript for that is fairly straight-forward:

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

## Resources
* [CodePen Version](https://codepen.io/pezmotion/pen/RQERdm)
* [Font Awesome 4.7 Example](https://fontawesome.com/v4.7.0/examples/#custom)
* [CSS Tricks Article](https://css-tricks.com/star-ratings/)
* [Lea Verou's Blog Post](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/) (*Note: her example no longer works*)
* [Mozilla docs on Radio Inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
