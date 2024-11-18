import { setNgrams } from "../languageData.js";
import { ngramsData } from "../ngrams/ngramsXS60.js";
setNgrams(ngramsData);
export * from "../languageDetector.js";
