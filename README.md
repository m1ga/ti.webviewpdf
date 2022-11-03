## Setup

```xml
<module>ti.webviewpdf</module>
```

```js
require("ti.webviewpdf").createPDF({webview: obj});
```

## Methods

* createPDF:
  * **webview**: (_required_) the webview object e.g. $.webview
  * **pageWidth**: (int) the width in mils (thousandths of an inch) of the PDF
  * **pageHeight**: (int) the height in mils (thousandths of an inch) of the PDF
  * **pageSize**: (int) one of the default constants
  * **showMenu**: (boolean) default false. Will show the printing menu and the user can change the paper size and storage place. There won't be a success call afterwards!
  * **success**: (callback function), returns e.data (TiBlob) with the PDF
  * **firstPageOnly**: (boolean) default false, only print first page

Use either _pageWidth/pageHeight_ OR _pageSize_. If you don't use any size it will be DIN A4

## Constants

* DIN_A4 (default)
* DIN_A3
* DIN_A2
* DIN_A1
* DIN_A5
* AUTO - will try to calculate the PDF page size depending on the webview height and screen width

## Example
```js
require("ti.webviewpdf").createPDF({
  webview: webview,
  pageWidth: 5000,
  pageHeight: 72000,
  success: function(e) {
    saveData(e.data);
  }
});
```

<a href="example/app.js">Full example</a>

#### Tip
You can use `document.body.scrollHeight` to get the page height.
