export const FAV_EKLE = "FAV_EKLE";
export const FAV_CIKAR = "FAV_CIKAR";
export const ONCEKİ = "ONCEKİ";
export const SONRAKİ = "SONRAKİ";
export const BASA_DON = "BASA_DON";
export const favEkle = (b) => {
  return { type: FAV_EKLE, payload: b };
};
export const favCıkar = (a) => {
  return { type: FAV_CIKAR, payload: a };
};
export const onceki = () => {
  return { type: ONCEKİ };
};
export const sonraki = () => {
  return { type: SONRAKİ };
};
export const basadon = () => {
  return { type: BASA_DON };
};
