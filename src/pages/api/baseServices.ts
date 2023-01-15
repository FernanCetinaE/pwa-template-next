const apiUrl: string = process.env.API_URL!;
/**
 * Generic request
 * @param method Name of method
 * @param options Option request
 * @returns 
 */
const request = (method: string, options: RequestInit): Promise<any> => {
    options.headers = Object.assign({}, {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + localStorage.getItem("security-token") || "",
        "Access-Control-Allow-Origin": "YOUR API URL"
    }, options.headers);

    return fetch(apiUrl.concat(method), options)
        .catch((resp) => {
            throw new Error(resp);
        })
        .then(async (resp) => {
            if (resp.ok) {  // si la peticion esta correcta                
                const tcontent: string = resp.headers.get('Content-Type') || '';
                if (tcontent === 'application/json') return await resp.json();
                if (tcontent.startsWith("image/")) return await resp.blob();
                if (tcontent.includes(".sheet")) return await resp.blob();
                if (tcontent.includes("pdf")) return await resp.blob();
                return resp;
            }
            else {
                
            }
            return resp;
        });
}


/**
 * Get Request
 * @param method Name of method
 * @param headers Optional headers
 * @returns 
 */
export const get = (method: string, headers?: HeadersInit): Promise<any> =>
    request(method, { headers });

/**
* Post Request
* @param method Name of method
* @param body Body of request
* @param headers Optional headers
* @returns 
*/
export const post = (method: string, body: any, headers?: HeadersInit): Promise<any> =>
    request(method, { headers, body: body ? JSON.stringify(body) : null, method: "POST" });


/**
* Patch request
* @param methodBody of request
* @param body Body of request
* @param headers Optional headers
* @returns 
*/
export const patch = (method: string, body: any, headers?: HeadersInit): Promise<any> =>
    request(method, { headers, body: body ? JSON.stringify(body) : null, method: "PATCH" });


/**
* Put request
* @param method Body of request
* @param body Body of request
* @param headers Optional headers
* @returns 
*/
export const put = (method: string, body: any, headers?: HeadersInit): Promise<any> =>
    request(method, { headers, body: body ? JSON.stringify(body) : null, method: "PUT" });

/**
* DELETE Request
* @param method Name of method
* @param body Body of request
* @param headers Optional headers
* @returns 
*/
export const deleteMethod = (method: string, body: any, headers?: HeadersInit): Promise<any> =>
request(method, { headers, body: body ? JSON.stringify(body) : null, method: "DELETE" });