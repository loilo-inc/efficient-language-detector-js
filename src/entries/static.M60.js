import { setNgrams } from "../languageData.js";
import { ngramsData } from "../ngrams/ngramsM60.js";
setNgrams(ngramsData);
export * from "../languageDetector.js";
