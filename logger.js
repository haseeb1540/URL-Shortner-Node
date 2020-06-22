
exports.bunyanOpts = {
    name: 'URLshortnerApp',
    streams: [
    {
        level: 'debug',
        stream: process.stdout       // log INFO and above to stdout
    },
    {
        level: 'info',
        path: 'logs.json'  // log ERROR and above to a file
    }
  ]
};
