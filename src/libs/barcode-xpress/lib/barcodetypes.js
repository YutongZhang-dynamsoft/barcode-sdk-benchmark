/**
 * Enum of barcode types
 * @enum {string}
 * @memberof module:barcode-js
 */
module.exports.BarcodeType = {
    /** Indicates an Add 2 barcode type. */
    ADD2: "add2",
    /** Indicates an Add 5 barcode type. */
    ADD5: "add5",
    /** Australian Post 4 State barcode. */
    AUSTRALIANPOST4STATE: "australianpost",
    /** Aztec barcode. */
    AZTEC: "aztec",
    /** Indicates a BCD Matrix barcode type. */
    BCDMATRIX: "bcdmatrix",
    /** Indicates a Codabar barcode type. */
    CODABAR: "codabar",
    /** Indicates a Code 32 barcode type. */
    CODE32: "code32",
    /** Indicates a Code 39 barcode type. */
    CODE39: "code39",
    /** Indicates a Code 39 Extended barcode type. */
    CODE39EXT: "code39ext",
    /** Indicates a Code 93 barcode type. */
    CODE93: "code93",
    /** Indicates a Code 93 Extended barcode type.*/
    CODE93EXT: "code93ext",
    /** Indicates a Code 128 barcode type.*/
    CODE128: "code128",
    /** Indicates a DataLogic 2 of 5 barcode type. */
    DATALOGIC2OF5: "datalogic2of5",
    /** Indicates a DataMatrix barcode type. */
    DATAMATRIX: "datamatrix",
    /** Indicates an EAN-8 barcode type. */
    EAN8: "ean8",
    /** Indicates an EAN-13 barcode. This also supports a JAN barcode which is an EAN-13 with country code 49. */
    EAN13: "ean13",
    /** Indicates an EAN-128 barcode type. */
    EAN128: "ean128",
    /** GS1 DataBar barcode */
    GS1DATABAR: "gs1databar",
    /** Indicates an IATA 2 of 5 barcode type. */
    IATA2OF5: "iata2of5",
    /** Indicates an Industry 2 of 5 barcode type. */
    INDUSTRIAL2OF5: "industrial2of5",
    /** United States Postal IntelligentMail 4 State barcode. */
    INTELLIGENTMAIL: "intelligentmail",
    /** Indicates an Interleaved 2 of 5 barcode type. */
    INTERLEAVED2OF5: "interleaved2of5",
    /** Indicates an Inverted 2 of 5 barcode type. */
    INVERTED2OF5: "inverted2of5",
    /** Indicates a Matrix 2 of 5 barcode type. */
    MATRIX2OF5: "matrix2of5",
    /** MicroPDF417 barcode */
    MICROPDF417: "micropdf417",
    /** Indicates a Patch Code. */
    PATCHCODE: "patchcode",
    /** Indicates a PDF417 barcode type. */
    PDF417: "pdf417",
    /** Indicates a PLANET barcode type. */
    PLANET: "planet",
    /** Indicates a PostNet barcode type. */
    POSTNET: "postnet",
    /** QR Code barcode */
    QRCODE: "qrcode",
    /** Royal Post 4 State barcode */
    ROYALPOST4STATE: "royalpost",
    /** Indicates a UPC-A barcode type. */
    UPCA: "upca",
    /** Indicates a UPC-E barcode type. */
    UPCE: "upce",
    /** UPU 4-State barcode */
    UPU4STATE: "upu",
    /** Indicates All barcode types. */
    ALL: "all",
    /** Indicates All 1D barcode types. */
    ALL_1D: "1d",
    /** Indicates All 2D barcode types. */
    ALL_2D: "2d",
}

/**
 * Enum of possible state transition types in the barcode reader's internal state.
 * Many barcode types are encoded as a state machine. When reading the data encoded therein, the machine will often move from one state to another.
 * This information give decoders more information as to the inner context of the barcode's information.
 * @enum {number}
 * @memberof module:barcode-js
 */
module.exports.ModeTransitionType = {
    /** No mode transition has occurred */
    QR_None: 0,
    /** QR Code's Numeric mode */
    QR_Numeric: 1,
    /** QR Code's Alphanumeric mode */
    QR_Alpha: 2,
    /** QR Code's Byte mode */
    QR_Byte: 3,
    /** QR Code's Kanji mode */
    QR_Kanji: 4,
    /** QR Code's Extended Channel Interpretation mode */
    QR_ECI: 5,
    /** QR Code's FNC1 mode, first position */
    QR_FNC1First: 6,
    /** QR Code's FNC1 mode, second position */
    QR_FNC1Second: 7,
    /** QR Code's Structured Append mode */
    QR_StructuredAppend: 8,
}
