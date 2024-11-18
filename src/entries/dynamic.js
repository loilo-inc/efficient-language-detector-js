import { setNgrams, languageData } from "../languageData.js";
import { eld } from "../languageDetector.js";

/**
 * @param {string} file File inside /ngrams/, with ELD ngrams data format
 * @returns {boolean|undefined} true if file was loaded
 */
export async function loadNgrams(file) {
  return await import("../ngrams/" + file).then((module) => {
    setNgrams(module.ngramsData);
    if (languageData.type) {
      return true;
    }
  });
}

await loadNgrams("ngramsM60.js");

const withLoader = { ...eld, loadNgrams };

export { withLoader as eld };
