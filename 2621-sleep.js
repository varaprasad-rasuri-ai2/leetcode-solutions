// 'sleep' is an asynchronous function that pauses execution for a given time.
async function sleep(millis) {

    // Return a Promise that resolves after 'millis' milliseconds.
    // setTimeout is used to delay the resolution of the promise.
    return new Promise(resolve => setTimeout(resolve, millis));
}
