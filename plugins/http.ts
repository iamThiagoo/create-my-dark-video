import CsrfService from "~/services/csrf";
import VideoService from "~/services/video";

interface IHttp {
    video: VideoService;
    csrf: CsrfService;
}

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const fetcher = $fetch.create({
        baseURL: runtimeConfig.public.NUXT_API_URL as string,
    });

    const httpServices: IHttp = {
        video: new VideoService(fetcher),
        csrf: new CsrfService(fetcher),
    };

    return {
        provide: {
            http: httpServices
        }
    }
});