import jsonP from "jsonp";
export default class Axios {
    static jsonp(options) {
        return new Promise(((resolve, reject) => {
            jsonP(options.url, {
                param: "callback"
            }, function (err, response) {
                //
                // resolve(response);
                if (response.status === "success") {
                    resolve(response);
                } else {
                    reject(response.message);
                }
            })
        }))
    }
}