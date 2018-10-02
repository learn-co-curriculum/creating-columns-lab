# Creating Columns Lab

## Problem Statement

Websites will often employ a 'column-based' layout scheme to visually
deliver content. While writing HTML and CSS for this kind of layout can be done
in many different ways, following a few simple patterns can help us achieve
clean code and a clean column-based look.


## Objectives

1. Practice writing and employing a column based CSS rule set


## Introduction

Using a 'before' and 'after' example, we will transform a page into a column
based presentation. In doing so, we will practice our skills writing re-usable,
rule-based, CSS. 

Column based layouts have endless visual applications, and are handy for
displaying a wide variety of content; be it text, images, videos, etc. In our
example, we will use images as tiles, and explore how a column layout enables us
to quickly re-arrange them as we see fit.

This lab is a great time to practice editing CSS directly in Chrome Inspector
Tools. This allows us to change properties/values on the fly and see what they
look like on screen before going back and editing the actual CSS file. 


## Instructions

- Examine what we have rendering already by opening `index.html` in the browser
- Create a `.column` class in `css/style.css`
- Create three classes that our tiled images will use: `.small`, `.med`, `.large`
- Add in three `<div>`s with class `.column` inside each of the three containers in our `index.html`
- Place the `<img>` elements within their respective column divs, and give them the appropriate size class (`.small`/`.med`/`.large`) 


<div align="center">
  <h4>What We Have</h4>
  <img src="https://curriculum-content.s3.amazonaws.com/fewds-css/creating-columns-lab-incomplete.png" alt="drawing" width="200px"/>
</div>

In the above example, our images are simply lining up one after another, left to
right, top to bottom. Instead, we want to organize them into columns, within
which they will align vertically.

<div align="center"><br>
  <h4>What We Want</h4>
  <img src="https://curriculum-content.s3.amazonaws.com/fewds-css/creating-columns-lab-complete.png" alt="drawing" width="200px"/>
</div><br>


#### Help Getting Started

Our **`.column`** class should have a specific value for the `display` property.
You may notice that, by default, the images will display all in a vertical line,
even with three column `<divs>` in each container. Instead, we need to make sure
the column elements know to display _horizontally_, not _vertically_.

Additionally, **`.column`** should have a set width. If we had two columns
instead of three, we might set `width: 50%`, designating that each column should
take up _half_ of its parent's width. 

When creating our tile size classes (**`.small`**, **`.med`**, **`.large`**),
all we need to do is provide properties that will change the size of the
element. As seen in the completed image example, images can either be their
normal size, 2x, or 3x. We can use the `width` and `height` properties, with `%`
based values, to control that. 

Don't forget to create three `<div>`s, with a class of `.column`, for each
container element in `index.html`!


<p data-visibility='hidden'>View <a href='https://learn.co/lessons/creating-columns-lab' title='Creating Columns Lab'>Creating Columns Lab</a> on Learn.co and start learning to code for free.</p>
