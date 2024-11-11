import type { $Fetch } from "ofetch";
import type { ICreate } from "./types";

export default class VideoService {
    private fetch: $Fetch;

    constructor(fetch: any) {
        this.fetch = fetch;
    }
    
    async generate(data: ICreate, token : string) {
        const response = await this.fetch('/video', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'x-csrf-Token': token
            },
            credentials: 'include'
        })

        return response;
    }
}