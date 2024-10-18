// src/index.js
import SQLDialectDetector from './SQLDialectDetector.js';

// Export for Node.js and ES6 import
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = SQLDialectDetector;
} else if (typeof define === 'function' && define.amd) {
    // AMD support
    define([], () => SQLDialectDetector);
} else {
    // Browser globals
    root.SQLDialectDetector = SQLDialectDetector; // Make it globally available
}
