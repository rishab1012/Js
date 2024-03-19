// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named IIFE
    console.log(`Database Connected For Alpha Batch One`);
})();

( (name)  => {
    // Unnamed IIFE
    console.log(`Database Connected For Sigma Batch Two, UserName : ${name}`);
} )('rishab')
