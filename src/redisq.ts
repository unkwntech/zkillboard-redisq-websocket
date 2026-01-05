import axios from "axios";

export default class ZKill_RedisQ {
    async GetNext() {
        return await axios
            .get(
                "https://zkillredisq.stream/listen.php?queueID=ibnkhatab_wsrelay",
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
