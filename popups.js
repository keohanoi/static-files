document.querySelectorAll('a[target="_blank"]').forEach(function(anchor) {
    anchor.removeAttribute('target');
});