<p align="center">
<img src="https://www.bit01.de/wp-content/uploads/2020/03/scrollEvent-logo.png" height="200" />
</p>
  
<p align="center">
<img src="https://img.shields.io/github/size/bitnulleins/scrollEvent.js/src/scrollEvent.min.js?label=size%20%28minimize%29" /> <img src="https://img.shields.io/npm/v/scrolleventjs" /> <img src="https://img.shields.io/npm/dm/scrolleventjs" />  <img src="https://img.shields.io/github/issues/bitnulleins/scrollEvent.js" /> 
</p>

# What is scrollEvent.js?
Simple and fast event listener for enter viewport in pure Java-Script. The features are:
* Event focused from viewport
* Works *without any* dependencies
* Fast und small size
* Multiple instances (and events) possible

# General use
1. First add the library to the header:
```html
<script type="text/javascript" src="scrollView.js"></script>
```
2. Now add an ScrollEvent listener for an element:

```html
<script type="text/javascript">
  ScrollEvent().visible(DOMElement, () => {
   // what should happen when DOMElement is visible?
  });
</script>
```

# Example

**Pure Java Script (Vanilla JS)**
```html
<script type="text/javascript">
  ScrollEvent().visible(document.getElementById('myElement'), () => {
   this.innerHTML = 'I changed my text right now!'
  });
</script>
```

It is also possible with javascript libraries like jQuery, React.js, AngularJS or vue.JS. Only have to switch element selector.

## Functions

```javascript
.visible(DOMElement, Callback)
```

Parameter | Description
--- | ---
**DOMElement** | An DOM element (HTML element), which is selected by a selector
**Callback** | Action which should fire, when the viewport is reached by scrolling

## Options
Option | Description | Datatype | Default Value
--- | --- | --- | ---
**delay** | ... | Number | 0
**repetition** | ... | Number |  1
**fullyInView** | ... | Boolean | false

## Install via npm

You can simple add the javascript library via *npm install*

```shell
npm install scrollevent
```
