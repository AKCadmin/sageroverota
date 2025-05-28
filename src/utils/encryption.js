import CryptoJS from "crypto-js";
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || "fallback_key_for_dev";

export function encrypt(text) {
  if (!text || !SECRET_KEY) throw new Error("Missing text or secret key.");
  try {
    const encrypted = CryptoJS.AES.encrypt(text.toString(), SECRET_KEY).toString();
    return encodeURIComponent(encrypted); // Safe for URLs
  } catch (e) {
    console.error("Encryption failed:", e);
    return "";
  }
  // return text;
}



export function decrypt(cipherText) {
  if (!cipherText || !SECRET_KEY) throw new Error("Missing cipherText or secret key.");
  try {
    const decoded = decodeURIComponent(cipherText);
    const bytes = CryptoJS.AES.decrypt(decoded, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    console.error("Decryption failed:", e);
    return "";
  }
  // return cipherText;
}

