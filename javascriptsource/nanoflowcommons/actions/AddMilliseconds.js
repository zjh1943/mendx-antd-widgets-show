// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * @param {Date} inputDate
 * @param {Big} numberOfMilliseconds
 * @returns {Promise.<Date>}
 */
async function AddMilliseconds(inputDate, numberOfMilliseconds) {
    // BEGIN USER CODE
    if (!inputDate) {
        throw new Error("JS_AddMilliseconds - inputDate is required");
    }
    if (!numberOfMilliseconds && numberOfMilliseconds !== 0) {
        throw new Error("JS_AddMilliseconds - numberOfMilliseconds is required");
    }
    const output = new Date(inputDate.getTime() + numberOfMilliseconds.toNumber());
    return output;
    // END USER CODE
}

export { AddMilliseconds };
