console.log("done");
window.onload = function() {
    console.log("done");
    document.querySelectorAll('a[target="_blank"]').forEach(function(anchor) {
        console.log("done");
        anchor.removeAttribute('target');
    });
};
