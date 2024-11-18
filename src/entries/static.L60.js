import { setNgrams } from "../languageData.js";
import { ngramsData } from "../ngrams/ngramsL60.js";
setNgrams(ngramsData);
export * from "../languageDetector.js";
