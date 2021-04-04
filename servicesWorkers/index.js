//Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-workerw.js').then(function(registration) {
        // register success
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}

/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            // Registration was successful
        }, function(err) {
            // registration failed :(
        });
    });
}
*/