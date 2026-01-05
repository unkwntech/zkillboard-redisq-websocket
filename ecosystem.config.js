module.exports = {
    apps: [
        {
            name: "zKill Websocket Relay",
            script: "dist/main.js",
            time: true,
            instances: 1,
            autorestart: true,
            max_restarts: 50,
            watch: false,
            max_memory_restart: "1G",
            appendEnvToName: true,
        },
    ],
};
