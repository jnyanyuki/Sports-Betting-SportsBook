const noop = () => {};
const handler = {
    get: function(target, prop) {
        if (prop in target) return target[prop];
        if (prop === '__esModule') return true;
        return noop;
    }
};

module.exports = new Proxy({
    __esModule: true,
    default: noop
}, handler);
