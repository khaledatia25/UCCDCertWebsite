
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true);
    }
}
module.exports = corsOptions;