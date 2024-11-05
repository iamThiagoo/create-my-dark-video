import VideoService from "~/services/video";

interface IHttp {
    video: VideoService;
}

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig()
    const fetcher = $fetch.create({
        baseURL: runtimeConfig.public.NUXT_API_URL as string,
    });

    const httpServices: IHttp = {
        video: new VideoService(fetcher),
    };

    return {
        provide: {
            http: httpServices
        }
    }
});