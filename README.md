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
- Place each `<img>` element within their respective column divs, and give them the appropriate size class (`.small`/`.med`/`.large`) 


<div align="center">
  <h4>What We Have</h4>
  <img src="https://curriculum-content.s3.amazonaws.com/fewds-css/creating-columns-lab-incomplete.png" alt="drawing" width="200px"/>
</div>

In the above example, our images are lining up one after another, left to
right, top to bottom. Instead, we want to organize them into columns, within
which they will align vertically.

<div align="center"><br>
  <h4>What We Want</h4>
  <img src="https://curriculum-content.s3.amazonaws.com/fewds-css/creating-columns-lab-complete.png" alt="drawing" width="200px"/>
</div><br>


#### Help Getting Started

- The **`.column`** class should have a _specific value_ for the `display` property that will 
- Create three `<div>`s, with a class of `.column`, insite of each `.container` element in `index.html`.
make sure the column elements know to display the images _horizontally_, not _vertically_.
By default the images display in a vertical line, even with three column `<divs>` in each container.

Additionally, **`.column`** should have a set width. If we had two columns
instead of three, we might set `width: 48%`, designating that each column should
take up roughly _half_ of its parent's width, being mindful of margin or padding
in between.

- When creating our tile size classes (**`.small`**, **`.med`**, **`.large`**), we need to provide
properties that will change the size of the element. As shown in the screenshot of the final product
images can be their original size, 2x, or 3x. Use the `width` and `height` properties, with `%`
based values, to control that. 


<p data-visibility='hidden'>View <a href='https://learn.co/lessons/creating-columns-lab' title='Creating Columns Lab'>Creating Columns Lab</a> on Learn.co and start learning to code for free.</p>
