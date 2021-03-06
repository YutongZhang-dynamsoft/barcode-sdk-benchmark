const protocol = require("./protocol");

let licenseSolutionName = null;
let licenseSolutionKey = null;
let oemLicenseKey = null;

// The windows dll file takes UTF-16
const encodeForWindows = value => {
    if (value !== null && process.platform == "win32") {
        return Buffer.from(value + "\0", "utf16le");
    }
    return value;
}

/**
 * Sets the BarcodeXpress control runtime license deployment solution name.
 * <p/>
 * <p><strong>Remarks</strong></p>
 * This is the name of the runtime license solution. 
 * The solution name is provided in the purchase confirmation email when runtime licenses are purchased.
 * @method
 * @memberof module:barcode-js
 * @param {string} solutionName - The solution name.
 * 
 * @example <caption>Set Solution Name</caption>
 * const bx = require('barcode-js');
 * bx.setSolutionName('YourSolutionName');
 */
module.exports.setSolutionName = value => {
    licenseSolutionName = encodeForWindows(value);
}

module.exports.getSolutionName = () => {
    return licenseSolutionName;
}

/**
 * Sets the BarcodeXpress control runtime license deployment key.
 * <p/>
 * <p><strong>Remarks</strong></p>
 * This is the solution key required for all runtime licensing. 
 * The four integers are provided at the time of purchase of the runtime licenses along with the solution name,
 * which is set with the <a href="#.module.exports.setSolutionName">setSolutionName</a> method.
 * 
 * @method
 * @memberof module:barcode-js
 * 
 * @param {number} v1 - Unlock key 1
 * @param {number} v2 - Unlock key 2
 * @param {number} v3 - Unlock key 3
 * @param {number} v4 - Unlock key 4
 * 
 * @example <caption>Set Solution Key</caption>
 * const bx = require('barcode-js');
 * bx.setSolutionKey(12345, 12345, 12345, 12345);
 */
module.exports.setSolutionKey = (v1, v2, v3, v4) => {
    const buffer = new ArrayBuffer(16);
    let offset = 0;

    offset += protocol.write32(new DataView(buffer, offset), v1);
    offset += protocol.write32(new DataView(buffer, offset), v2);
    offset += protocol.write32(new DataView(buffer, offset), v3);
    offset += protocol.write32(new DataView(buffer, offset), v4);
    licenseSolutionKey = Buffer.from(buffer);
}

module.exports.getSolutionKey = () => {
    return licenseSolutionKey;
}


/**
 * Sets the BarcodeXpress runtime OEM license key.  
 * <p/>
 * <p><strong>Remarks</strong></p>
 * When OEM runtime licenses are purchased, the OEM license key is provided in the purchase confirmation email.
 * 
 * @method
 * @memberof module:barcode-js
 * 
 * @param {string} OEMLicenseKey - The OEM license key required for OEM licensing.
 * 
 * @example <caption>Set OEM License Key</caption>
 * const  bx = require('barcode-js');
 * bx.setOEMLicenseKey('1.0.AStringForOEMLicensingContactAccusoftSalesForMoreInformation...');
 */
module.exports.setOemLicenseKey = value => {
    oemLicenseKey = encodeForWindows(value);
}

module.exports.getOemLicenseKey = () => {
    return oemLicenseKey;
}
