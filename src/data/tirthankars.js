/**
 * Data for the 24 Tirthankars — life span, height, and derived values for charts.
 * Sourced from docs/Biographies/24 Tirthankars.
 */

/** 1 Purva = 70,560,000,000,000 years */
export const YEARS_PER_PURVA = 70_560_000_000_000;

/** Convert Lakh Purva to years (1 Lakh Purva = 100,000 Purva). */
export function purvaLakhToYears(lakhPurva) {
  return lakhPurva * 100_000 * YEARS_PER_PURVA;
}

/**
 * Innumerable units for time-gap chart (Jainism: calculative but not finite in ordinary sense).
 * 1 Palya = innumerable years (very large). 1 Saagar = infinite Palyas, so 1 Saagar >> 1 Palya.
 * Base is chosen so the sequence decreases: 1/4 Palya > 1000 Kodi > normal years.
 */
const LAKH = 1e5;
const KODI = 1e7; // 1 Kodi = 10 million (so 1000 Kodi = 1e10 years)
/** 1 Palya = innumerable years (very large so Palya > 1000 Kodi = 1e10). */
export const ONE_PALYA_YEARS = 1e30;
/**
 * 1 Saagar = infinite Palyas, so 1 Saagar >> 1 Palya.
 * Must stay ≤ ~3e294 so that 50 Lakh Kodi Saagar (= 5e13 × this) does not exceed
 * Number.MAX_VALUE (~1.8e308); otherwise JS yields Infinity and the graph breaks.
 */
export const ONE_SAAGAR_YEARS = 1e291;

function saagarYears(n) {
  return n * ONE_SAAGAR_YEARS;
}
function palyaYears(n) {
  return n * ONE_PALYA_YEARS;
}

export const TIME_BETWEEN_TIRTHANKARS = [
  { index: 1, name: "Aadinath to Ajitnath", years: 50 * LAKH * KODI * ONE_SAAGAR_YEARS + 3 + 8 / 12 + 15 / 365.25, label: "50 Lakh Kodi Saagar + 3 years 8 months and 15 days" },
  { index: 2, name: "Ajitnath to Sambhavnath", years: 30 * LAKH * KODI * ONE_SAAGAR_YEARS, label: "30 Lakh Kodi Saagar years" },
  { index: 3, name: "Sambhavnath to Abhinandannath", years: 10 * LAKH * KODI * ONE_SAAGAR_YEARS, label: "10 Lakh Kodi Saagar years" },
  { index: 4, name: "Abhinandannath to Sumatinath", years: 9 * LAKH * KODI * ONE_SAAGAR_YEARS, label: "9 Lakh Kodi Saagar years" },
  { index: 5, name: "Sumatinath to Padmaprabhu", years: 90_000 * KODI * ONE_SAAGAR_YEARS, label: "90,000 Kodi Saagar years" },
  { index: 6, name: "Padmaprabhu to Suparshwanath", years: 9_000 * KODI * ONE_SAAGAR_YEARS, label: "9000 Kodi Saagar years" },
  { index: 7, name: "Suparshwanath to Chandraprabh", years: 900 * KODI * ONE_SAAGAR_YEARS, label: "900 Kodi Saagar years" },
  { index: 8, name: "Chandraprabh to Pushpadantnath", years: 90 * KODI * ONE_SAAGAR_YEARS, label: "90 Kodi Saagar years" },
  { index: 9, name: "Pushpadantnath to Sheetalnath", years: 9 * KODI * ONE_SAAGAR_YEARS, label: "9 Kodi Saagar years" },
  { index: 10, name: "Sheetalnath to Shreyansnath", years: (100 * KODI + 3_374_000) * ONE_SAAGAR_YEARS, label: "(100 Kodi + 3374000) Saagar years" },
  { index: 11, name: "Shreyansnath to Vasupujyanath", years: saagarYears(54), label: "54 Saagar years" },
  { index: 12, name: "Vasupujyanath to Vimalnath", years: saagarYears(30), label: "30 Saagar years" },
  { index: 13, name: "Vimalnath to Anantnath", years: saagarYears(9), label: "9 Saagar years" },
  { index: 14, name: "Anantnath to Dharmanath", years: saagarYears(4), label: "4 Saagar years" },
  { index: 15, name: "Dharmanath to Shantinath", years: 3 * ONE_SAAGAR_YEARS - (3 / 4) * ONE_PALYA_YEARS, label: "3 Saagar - 3/4 Palya years" },
  { index: 16, name: "Shantinath to Kunthunath", years: palyaYears(1 / 2), label: "1/2 Palya years" },
  { index: 17, name: "Kunthunath to Arnath", years: palyaYears(1 / 4), label: "1/4 Palya - 17000 Kodi years" },
  { index: 18, name: "Arnath to Mallinath", years: 1000 * KODI, label: "1000 Kodi years" },
  { index: 19, name: "Mallinath to Munisuvratnath", years: 5_400_000, label: "54 Lakh years" },
  { index: 20, name: "Munisuvratnath to Naminath", years: 600_000, label: "6 Lakh years" },
  { index: 21, name: "Naminath to Neminath", years: 500_000, label: "5 Lakh years" },
  { index: 22, name: "Neminath to Parshwanath", years: 83_750, label: "83,750 years" },
  { index: 23, name: "Parshwanath to Mahavir Swami", years: 246 + 3 / 12 + 15 / 365.25, label: "246 years 3 months and 15 days" },
];

export const TIRTHANKARS = [
  { index: 1, name: "Aadinath", lifeSpanLabel: '84 lakh Purva years', lifeSpanPurvaLakh: 84, height: 500, heightUnit: "Dhanush", samavsaranYojan: 12 },
  { index: 2, name: "Ajitnath", lifeSpanLabel: '72 lakh Purva years', lifeSpanPurvaLakh: 72, height: 450, heightUnit: "Dhanush", samavsaranYojan: 11.5 },
  { index: 3, name: "Sambhavnath", lifeSpanLabel: '60 lakh Purva years', lifeSpanPurvaLakh: 60, height: 400, heightUnit: "Dhanush", samavsaranYojan: 11 },
  { index: 4, name: "Abhinandannath", lifeSpanLabel: '50 lakh Purva years', lifeSpanPurvaLakh: 50, height: 350, heightUnit: "Dhanush", samavsaranYojan: 10.5 },
  { index: 5, name: "Sumatinath", lifeSpanLabel: '40 lakh Purva years', lifeSpanPurvaLakh: 40, height: 300, heightUnit: "Dhanush", samavsaranYojan: 10 },
  { index: 6, name: "Padmaprabhu", lifeSpanLabel: '30 lakh Purva years', lifeSpanPurvaLakh: 30, height: 250, heightUnit: "Dhanush", samavsaranYojan: 9.5 },
  { index: 7, name: "Suparshwanath", lifeSpanLabel: '20 lakh Purva years', lifeSpanPurvaLakh: 20, height: 200, heightUnit: "Dhanush", samavsaranYojan: 9 },
  { index: 8, name: "Chandraprabh", lifeSpanLabel: '10 lakh Purva years', lifeSpanPurvaLakh: 10, height: 150, heightUnit: "Dhanush", samavsaranYojan: 8.5 },
  { index: 9, name: "Pushpadantnath", lifeSpanLabel: '2 lakh Purva years', lifeSpanPurvaLakh: 2, height: 100, heightUnit: "Dhanush", samavsaranYojan: 8 },
  { index: 10, name: "Sheetalnath", lifeSpanLabel: '1 lakh Purva years', lifeSpanPurvaLakh: 1, height: 90, heightUnit: "Dhanush", samavsaranYojan: 7.5 },
  { index: 11, name: "Shreyansnath", lifeSpanLabel: '84 lakh years', lifeSpanYears: 8_400_000, height: 80, heightUnit: "Dhanush", samavsaranYojan: 7 },
  { index: 12, name: "Vasupujyanath", lifeSpanLabel: '72 lakh years', lifeSpanYears: 7_200_000, height: 70, heightUnit: "Dhanush", samavsaranYojan: 6.5 },
  { index: 13, name: "Vimalnath", lifeSpanLabel: '60 lakh years', lifeSpanYears: 6_000_000, height: 60, heightUnit: "Dhanush", samavsaranYojan: 6 },
  { index: 14, name: "Anantnath", lifeSpanLabel: '30 lakh years', lifeSpanYears: 3_000_000, height: 50, heightUnit: "Dhanush", samavsaranYojan: 5.5 },
  { index: 15, name: "Dharmanath", lifeSpanLabel: '10 lakh years', lifeSpanYears: 1_000_000, height: 45, heightUnit: "Dhanush", samavsaranYojan: 5 },
  { index: 16, name: "Shantinath", lifeSpanLabel: '100 thousand years', lifeSpanYears: 100_000, height: 40, heightUnit: "Dhanush", samavsaranYojan: 4.5 },
  { index: 17, name: "Kunthunath", lifeSpanLabel: '95 thousand years', lifeSpanYears: 95_000, height: 35, heightUnit: "Dhanush", samavsaranYojan: 4 },
  { index: 18, name: "Arnath", lifeSpanLabel: '84 thousand years', lifeSpanYears: 84_000, height: 30, heightUnit: "Dhanush", samavsaranYojan: 3.5 },
  { index: 19, name: "Mallinath", lifeSpanLabel: '55 thousand years', lifeSpanYears: 55_000, height: 25, heightUnit: "Dhanush", samavsaranYojan: 3 },
  { index: 20, name: "Munisuvratnath", lifeSpanLabel: '30 thousand years', lifeSpanYears: 30_000, height: 20, heightUnit: "Dhanush", samavsaranYojan: 2.5 },
  { index: 21, name: "Naminath", lifeSpanLabel: '10 thousand years', lifeSpanYears: 10_000, height: 15, heightUnit: "Dhanush", samavsaranYojan: 2 },
  { index: 22, name: "Neminath", lifeSpanLabel: '1 thousand years', lifeSpanYears: 1_000, height: 10, heightUnit: "Dhanush", samavsaranYojan: 1.5 },
  { index: 23, name: "Parshwanath", lifeSpanLabel: '100 years', lifeSpanYears: 100, height: 9/4, heightUnit: "Dhanush", samavsaranYojan: 1.25 },
  { index: 24, name: "Mahavir Swami", lifeSpanLabel: '72 years', lifeSpanYears: 72, height: 7/4, heightUnit: "Dhanush", samavsaranYojan: 1 },
];

/** Life span always in years (Purva converted using 1 Purva = 70,560,000,000,000 years). */
export function getLifeSpanYears(t) {
  if (t.lifeSpanPurvaLakh != null) return purvaLakhToYears(t.lifeSpanPurvaLakh);
  return t.lifeSpanYears;
}

/** Human-readable label for a life span in years (e.g. "5.93×10²⁰ years", "72 years"). */
export function formatYearsLabel(years) {
  if (years >= 1e21) return `${(years / 1e21).toFixed(2)}×10²¹ years`;
  if (years >= 1e20) return `${(years / 1e20).toFixed(2)}×10²⁰ years`;
  if (years >= 1e18) return `${(years / 1e18).toFixed(2)}×10¹⁸ years`;
  if (years >= 1e15) return `${(years / 1e15).toFixed(2)}×10¹⁵ years`;
  if (years >= 1_000_000) return `${(years / 1_000_000).toFixed(1)} million years`;
  if (years >= 1_000) return `${(years / 1_000).toFixed(1)} thousand years`;
  return `${years.toLocaleString()} years`;
}

/** Difference in years from previous Tirthankar (for "decrease" chart). */
export function getLifeSpanDifferenceYears(t, prev) {
  if (!prev) return null;
  return getLifeSpanYears(prev) - getLifeSpanYears(t);
}
