import axios from "axios";

export default class ESI {
    public static async GetKillmail(href: string) {
        return await axios
            .get(href)
            .then((res) => {
                return res.data;
            })
            .catch(console.error);
    }
}
