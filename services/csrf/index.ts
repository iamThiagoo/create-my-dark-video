import type { $Fetch } from "ofetch";

export default class CsrfService {
    private fetch: $Fetch;

    constructor(fetch: any) {
        this.fetch = fetch;
    }

    async getCsrfToken() {
        const response = await this.fetch('/csrf', {
            method: 'POST',
            credentials: 'include'
        })

        return response;
    }
}