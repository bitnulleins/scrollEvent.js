<p align="center">
<img src="https://www.bit01.de/wp-content/uploads/2020/03/scrollEvent.png" height="200" />
</p>
  
<p align="center">
<img src="https://img.shields.io/github/size/bitnulleins/scrollEvent.js/src/scrollEvent.min.js?label=size%20%28minimize%29" /> <img src="https://img.shields.io/npm/v/scrolleventjs" /> <img src="https://img.shields.io/npm/dm/scrolleventjs" />  <img src="https://img.shields.io/github/issues/bitnulleins/scrollEvent.js" /> 
</p>

# What is scrollEvent.js?
> Simple and fast event listener for enter viewport in pure Java-Script.

Key-features are:
* Event actions for visible viewport
* Works *without any* dependencies
* Fast und small size in pure javascript
* Multiple instances (and events) possible

# General use
1. First [download](https://github.com/bitnulleins/scrollEvent.js/archive/master.zip) and add the library to the header:
```html
<script src="./local/path/to/scrollEvent.min.js"></script>
```
With external hosted file:
```html
<script src="https://cdn.jsdelivr.net/npm/scrolleventjs"></script>
```
2. Now add ScrollEvent listener to an element:

```html
<script type="text/javascript">
  ScrollEvent().visible(DOMElement, () => {
   // Event that should happen when DOMElement is visible
  });
</script>
```

# Example and demo

**Pure Java Script (Vanilla JS)**
```html
<script type="text/javascript">
  ScrollEvent().visible(document.getElementById('myElement'), (element) => {
   elment.innerHTML = 'I changed my text right now!'
  });
</script>
```

***See the javascript library live in action:*** [Open Example](https://bitnulleins.github.io/scrollEvent.js/)

It is also possible with javascript libraries like jQuery, React.js, AngularJS or vue.JS. Only have to switch element selector.

## Functions

```javascript
ScrollEvent().visible(DOMElement, Callback)
```

Parameter | Description
--- | ---
**DOMElement** | An HTML DOM element (as selector)
**Callback(element)** | A function (Event), called when element is visible. Object in method: *element*

## Options

The options are optional and can be added as an **object** to the main ScrollEvent function:

Option | Description | Datatype | Default Value
--- | --- | --- | ---
**delay** | Delay time in ms, after event should fire | Number | 0
**repetition** | Amount of repetition of the event | Number |  1
**fullyInView** | Have the elemnt to be fully in view? | Boolean | false

**Example**

```javascript
ScrollEvent({delay:2000,fullyInView:true}, () => { /* action .... */ });
```

## Install via npm

You can simple install the javascript library locally via [npm](https://www.npmjs.com/package/scrolleventjs):

```shell
npm install scrolleventjs
```
