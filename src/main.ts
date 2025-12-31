import WebSocket, { WebSocketServer } from "ws";
import ESI from "./esi";
import ZKill_RedisQ from "./redisq";

async function main() {
    const wss = new WebSocketServer({ port: 8080 });
    const redisq = new ZKill_RedisQ();
    const clients: WebSocket[] = [];

    wss.on("connection", (ws) => {
        ws.on("error", console.error);
        clients.push(ws);
        ws.on("close", () => {
            const index = clients.findIndex((c) => c === ws);
            if (index > -1) {
                clients.splice(index, 1);
            }
        });
    });

    const sleep = async function (delay: number): Promise<void> {
        new Promise((resolve) => setTimeout(resolve, delay));
    };

    while (true) {
        const kill = (await redisq.GetNext()).package ?? null;
        if (kill === null) continue;

        const fullKill = {
            ...kill,
            ...(await ESI.GetKillmail(kill.zkb.href)),
        };
        console.log(new Date().toISOString(), fullKill);

        for (let c of clients) {
            if (!c.OPEN) continue;

            c.send(JSON.stringify(fullKill));
        }

        await sleep(100);
    }
}
main();
