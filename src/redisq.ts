import axios from "axios";
require("dotenv").config();

export default class ZKill_RedisQ {
    async GetNext() {
        return await axios
            .get(
                `https://zkillredisq.stream/listen.php?queueID=${process.env.REDISQ_ID}`,
                {
                    timeout: 12000,
                }
            )
            .then((res) => res.data)
            .catch((e) => {
                //Suppress connection timeout
                if (e.code === "ECONNABORTED") {
                    return null;
                }
                throw e;
            })
            .catch(console.error);
    }
}
