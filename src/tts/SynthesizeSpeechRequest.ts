import type { SynthesisInput, SynthesisInput__Output } from './SynthesisInput'
import type { VoiceSelectionParams, VoiceSelectionParams__Output } from './VoiceSelectionParams'
import type { AudioConfig, AudioConfig__Output } from './AudioConfig'

export interface SynthesizeSpeechRequest {
    /**
     * Input to synthesize.
     */
    input?: SynthesisInput | null

    /**
     * Voice selection parameters.
     */
    voice?: VoiceSelectionParams | null

    /**
     * Audio configuration.
     */
    audio_config?: AudioConfig | null
}

export interface SynthesizeSpeechRequest__Output {
    /**
     * Input to synthesize.
     */
    input: SynthesisInput__Output | null

    /**
     * Voice selection parameters.
     */
    voice: VoiceSelectionParams__Output | null

    /**
     * Audio configuration.
     */
    audio_config: AudioConfig__Output | null
}
