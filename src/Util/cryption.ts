import * as CryptoJS from 'crypto-js';

export function encrypt(text: string, key: string): string {
  return encodeURIComponent(CryptoJS.AES.encrypt(text, key).toString());
}

export function decrypt(text: string, key: string): string {
  const decodedText = decodeURIComponent(text);
  return CryptoJS.AES.decrypt(decodedText, key).toString(CryptoJS.enc.Utf8);
}
