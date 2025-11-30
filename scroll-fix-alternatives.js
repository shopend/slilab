// Alternative fix if the reflow doesn't work

// Option 1: Use setTimeout to delay scroll reset
setTimeout(() => {
    const scrollContainer = document.getElementById('content-scroll-container');
    if (scrollContainer) {
        scrollContainer.scrollTo(0, 0);
    }
}, 0);

// Option 2: Force layout recalculation differently
const scrollContainer = document.getElementById('content-scroll-container');
if (scrollContainer) {
    const prevDisplay = scrollContainer.style.display;
    scrollContainer.style.display = 'none';
    scrollContainer.offsetHeight; // trigger reflow
    scrollContainer.style.display = prevDisplay || '';
    scrollContainer.scrollTop = 0;
}

// Option 3: Add explicit height on pages
// In CSS:
.hidden - page {
    display: none;
}
.visible - page {
    display: block;
    min - height: 100 %;
}

//Option 4: Remove pointer-events issue
// Check if pointer-events: none is blocking scroll
