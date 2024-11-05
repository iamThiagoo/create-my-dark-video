import type { LanguageEnum } from "~/enum/language.enum"
import type { VoiceEnum } from "~/enum/voice.enum"

export type ICreate = {
    prompt: String,
    enableNoAIStoryOption: Boolean,
    enableCaption: Boolean,
    voice: VoiceEnum,
    language: LanguageEnum,
}