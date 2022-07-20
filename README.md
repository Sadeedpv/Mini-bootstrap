# MINI-BOOTSTRAP 🚀
### <br /> This is my very first basic npm package. Use it to style your website. It contains HTML, CSS and JavaScript-based design templates for some interface components. <br />
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
# Documentation

Apart from shadows, you can also add the following property:
|Property|Possible values|
|--------|---------------|
|shadow| **hard** / **_soft_**|
|border| **hard** / **_soft_**|
|padding| **p-1** /**p-2** /**p-3** /**p-4** /**p-5**|
|margin| **m-1** /**m-2** /**m-3** /**m-4** /**m-5**|
|fontSize|  **_sm_** /  **_md_** / **_lg_** /|
|fontWeight|  **light** /  **normal** / **medium** / **bold**|


## License

[MIT](https://choosealicense.com/licenses/mit/)
