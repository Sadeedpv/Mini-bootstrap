# MINI-BOOTSTRAP 🚀
### This is my very first basic npm package. Use it to style your website. It contains HTML, CSS and JavaScript-based design templates for some interface components.
# Installation 
```bash
  npm install mini-bootstrap
```
# Usage
Add the class **apply-styles** to apply your styling to the DOM element.
```html
  <div class='apply-styles'></div>
```
Then, in the javascript file
```javascript
  import {styles} from 'mini-bootstrap';
  
  styles({
    shadow : "hard",
  });
```
