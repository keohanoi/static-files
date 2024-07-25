document.addEventListener('DOMContentLoaded', function() {
    console.log("done");
    document.querySelectorAll('a[target="_blank"]').forEach(function(anchor) {
        anchor.removeAttribute('target');
        console.log("done");
    });
});
