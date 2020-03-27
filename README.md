<p align="center">
<img src="https://www.bit01.de/wp-content/uploads/2020/03/scrollEvent-logo.png" height="200" />
</p>
  
<p align="center">
<img src="https://img.shields.io/github/size/bitnulleins/scrollView.js/scrollView.min.js?label=size%20%28minimize%29" /> <img src="https://img.shields.io/npm/v/scrollviewjs" /> <img src="https://img.shields.io/npm/dm/scrollviewjs" />  <img src="https://img.shields.io/github/issues/bitnulleins/scrollView.js" /> 
</p>

# What is scrollEvent.js?
Simple and fast event listener for enter viewport in pure Java-Script. The features are:
* Event focused from viewport
* Fast und small size
* Multiple instances (and events) possible

# How does it works?
1. First add the library to the header:
```html
<script type="text/javascript" src="scrollView.js"></script>
```
2. Now add an ScrollEvent listener for an element:

```javascript
<script type="text/javascript">
ScrollEvent().visible(**element**, () => {
 // what should happen if **element** is visible?
});
</script>
```

# Example
...
