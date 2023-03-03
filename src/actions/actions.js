export const FAV_EKLE = "FAV_EKLE";
export const FAV_CIKAR = "FAV_CIKAR";
export const favEkle = (b) => {
  return { type: FAV_EKLE, payload: b };
};
export const favCıkar = (a) => {
  return { type: FAV_CIKAR, payload: a };
};
