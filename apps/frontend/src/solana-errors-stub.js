// Dynamic Proxy stub for @solana/errors to satisfy Webpack named import checks
const handler = {
    get: function(target, prop) {
        if (prop in target) return target[prop];
        return prop; // Returns the error key string for any requested SOLANA_ERROR_* symbol
    }
};

module.exports = new Proxy({
    isSolanaError: () => false,
    SolanaError: Error
}, handler);
