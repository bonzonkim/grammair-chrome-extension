export type SubmissionReqeuest = {
  text: string;
  model: string;
  reasonLanguage: string;
}

export type CorrectionDetail = {
  original: string;
  reason: string;
}

export type ApiResponseType = {
  corrected_text: string;
  wrong_count: number;
  errors: CorrectionDetail[]
}
