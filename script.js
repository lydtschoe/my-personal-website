window.addEventListener('resize', function() {
    adjustContentWidth();
});

function adjustContentWidth() {
    var containerWidth = document.querySelector('.container').offsetWidth;
    var contentContainer = document.querySelector('.content-container');
    contentContainer.style.maxWidth = containerWidth + 'px';
}

adjustContentWidth();
