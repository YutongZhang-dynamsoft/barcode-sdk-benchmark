[![BarcodeXpress](https://accuproducts.s3.amazonaws.com/barcodexpress/npmjs/Barcode_Xpress_graphic.png)](https://www.accusoft.com/products/barcode-xpress-collection/barcode-xpress/#see-it-in-action)

# What is Barcode Xpress

Barcode Xpress for Node.js enables developers to add the ability to read common industry 1D and 2D barcodes in their applications.

- **Barcode Types** - recognize over 30 different types of barcodes.
- **Structured Results** - results are organized in a hierarchical model where every barcode has a value, type, confidence, and location.
- **Simple** - by providing only a minimal asynchronous API, Barcode Xpress is easy to learn. With a few lines of code, recognize barcodes found in images produced by scanners, cameras, or fax machines.

## Getting Started

 1. Make sure you have the following system requirements:
    - Windows x64 operating systems of the following versions:
        - Windows 8.1
        - Windows 10
        - Windows Server 2012 (and R2)
        - Windows Server 2016
        - Windows Server 2019
    -  Linux x64 operating systems of the following versions:
        - Ubuntu 16.04
        - Ubuntu 18.04
        - Ubuntu 20.04
        - CentOS 7
        - CentOS 8
        - Debian 9
        - Debian 10
    - Node.js versions 10, 12, 14 and npm (to check the version use the following command: `node -v`)
 2. Install the package (and its dependencies) by running the command `npm install barcode-js`.

Although Barcode Xpress for Node.js may run, it is not supported on earlier operating system versions (for example, Ubuntu 14.04 or Windows 7).

## Reading Barcodes

```js
// Import packages.
const bx = require("barcode-js");

// Set up logging function.
const logResults = (results) => console.log(JSON.stringify(results, ["type", "value", "confidence"], 2));

// Set up analysis function.
const analyzeBarcodes = async (filePath) => {
    try {
        const results = await bx.analyze(filePath);
        logResults(results);
    }
    catch(err) {
        console.error(`Fatal: Error analyzing image input\n${err}`);
    }
};

// Set up parameters.
// Accepted file types are bmp, tiff, jpg, gif, png, and url
const filePath = "test.bmp";

// Call analyze.
analyzeBarcodes(filePath);
```

## Accessing Results

The analyze method returns an array of result *objects*.

Each result object has the following structure:

```json
{
    "type": barcodeType,
    "value": barcodeValue,
    "area": {
        "x": xCoordinateBarcodeStart,
        "y": yCoordinateBarcodeStart,
        "height": barcodeHeight,
        "width": barcodeWidth
    },
    "corners": [
    {
        "x": xCoordinateTopLeft,
        "y": yCoordinateTopLeft
    },
    {
        "x": xCoordinateTopRight,
        "y": yCoordinateTopRight
    },
        {
        "x": xCoordinateBottomRight,
        "y": yCoordinateBottomRight
    },
        {
        "x": xCoordinateBottomLeft,
        "y": yCoordinateBottomLeft
    }
    ],
    "confidence": recognitionConfidence
}
```

For example, to get the confidence of a recognized barcode:

```js
const barcodeValue = result.confidence;
```

or to get the height property of a recognized barcode:

```js
const barcodeHeight = result.area.height;
```

## Licensing

Barcode Xpress for Node.js comes with an evaluation license pre-installed, so you can get started right away.

For development and deployment licenses, and more information on licensing in general, please visit our online documention at <https://help.accusoft.com/BarcodeXpress/v13.3/BxNodeJs/webframe.html>.

In order to run the license manager, you will need:
- `java -version` JRE 1.8 or later.

**Licensing notes**

On CentOS 8 operating system Barcode Xpress License Manager may not work since some cryptographic protocols are disabled by default. 
In this case to install a license on the local computer required mode can be enabled with the following command (run it as a root):

`update-crypto-policies --set LEGACY`

After installing the license default mode can be enabled with the command:

`update-crypto-policies --set DEFAULT`

See command description:
<https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/using-the-system-wide-cryptographic-policies_security-hardening>


## More Documentation and Support

Barcode Xpress also includes detailed API documentation and a Getting Started guide.

- Need more documentation? Check out the `User's Guide`:
  <https://help.accusoft.com/BarcodeXpress/v13.3/BxNodeJs/webframe.html>
  
- Need help? Contact Accusoft at sales@accusoft.com.
