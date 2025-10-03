import 'https://cdn.jsdelivr.net/npm/brython@3.13.2/+esm';

// Initialize Brython runtime
brython({
    debug: 1,
    pythonpath: ['https://cdn.jsdelivr.net/npm/']
});

// Wait a tick so Brython runtime is ready
setTimeout(() => {
    const pythonCode = `
from browser import window

# Access a JS global (you must define one)
print("window.location.href =", window.location.href)
`;

    __BRYTHON__.run_script(pythonCode, '__main__');
}, 50); // 50ms delay usually enough
// To run python make a simple jsthon call
function jsthon(code) {
    // Wait until Brython runtime exists
    if (typeof __BRYTHON__ === 'undefined') {
        setTimeout(() => jsthon(code), 50);
        return;
    }
    __BRYTHON__.run_script(code, '__main__');
}
