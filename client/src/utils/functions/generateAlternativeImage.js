// Extract initials from a username
const getInitials = (username = "") => {
    // Normalize input: ensure string + remove extra spaces
    const normalized = String(username).trim();

    // Fallback if empty → default initial
    if (!normalized) return "U";

    // Split name into words (handles multiple spaces)
    const parts = normalized.split(/\s+/).filter(Boolean);

    // If only one word → take first 2 letters
    if (parts.length === 1) {
        return parts[0].slice(0, 2).toUpperCase();
    }

    // If multiple words → first letter of first + last word
    return `${parts[0][0] || ""}${parts[parts.length - 1][0] || ""}`.toUpperCase();
};

// Generate a numeric hash from a string (used for consistent colors)
const hashString = (value = "") => {
    let hash = 0;

    // Loop through each character
    for (let i = 0; i < value.length; i += 1) {
        // Hash formula: (hash * 31) + charCode
        hash = value.charCodeAt(i) + ((hash << 5) - hash);

        // Convert to 32-bit integer (prevents overflow)
        hash |= 0;
    }

    // Ensure positive number
    return Math.abs(hash);
};

// Generate a fallback avatar as an SVG data URL
function generateAlternativeImage(username) {
    // Normalize username safely
    const safeName = String(username || "").trim();

    // Get initials (e.g., "Ahmed Maher" → "AM")
    const initials = getInitials(safeName);

    // Generate consistent hash (fallback to initials if empty)
    const hash = hashString(safeName || initials);

    // Map hash to a hue value (0 → 359)
    const hue = hash % 360;

    // Create gradient colors using HSL
    const bgColorStart = `hsl(${hue}, 62%, 45%)`;
    const bgColorEnd = `hsl(${(hue + 35) % 360}, 68%, 35%)`;

    // Adaptive typography with fixed slots for consistent letter width appearance
    const isSingleLetter = initials.length === 1;
    const fontSize = isSingleLetter ? 58 : 40;

    const wideGlyphs = new Set([
        "A",
        "B",
        "D",
        "G",
        "H",
        "M",
        "N",
        "O",
        "Q",
        "R",
        "U",
        "W",
    ]);
    const firstInitial = initials[0] || "";
    const secondInitial = initials[1] || "";
    const extraGap =
        (wideGlyphs.has(firstInitial) ? 1.2 : 0) +
        (wideGlyphs.has(secondInitial) ? 1.2 : 0);
    const halfGap = 9.6 + extraGap;

    const leftX = 64 - halfGap;
    const rightX = 64 + halfGap;

    const monogram = isSingleLetter
        ? `
  <g filter="url(#softTextShadow)">
    <text
      x="64"
      y="65"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="#ffffff"
      font-family="'Outfit', 'Segoe UI', Arial, sans-serif"
      font-size="${fontSize}"
      font-weight="600"
      text-rendering="geometricPrecision"
    >${initials}</text>
  </g>`
        : `
  <g filter="url(#softTextShadow)">
    <text
      x="${leftX}"
      y="65"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="#ffffff"
      font-family="'Outfit', 'Segoe UI', Arial, sans-serif"
      font-size="${fontSize}"
      font-weight="600"
      text-rendering="geometricPrecision"
    >${initials[0]}</text>
    <text
      x="${rightX}"
      y="65"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="#ffffff"
      font-family="'Outfit', 'Segoe UI', Arial, sans-serif"
      font-size="${fontSize}"
      font-weight="600"
      text-rendering="geometricPrecision"
    >${initials[1]}</text>
  </g>`;

    // Build SVG avatar with gradient background + centered initials
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="${initials}">
  <defs>
    <linearGradient id="avatarGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bgColorStart}"/>
      <stop offset="100%" stop-color="${bgColorEnd}"/>
    </linearGradient>
    <filter id="softTextShadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="0.6" stdDeviation="0.5" flood-color="rgba(0,0,0,0.12)"/>
    </filter>
  </defs>
  <!-- Circular background -->
  <rect width="128" height="128" rx="64" fill="url(#avatarGradient)"/>
  <circle cx="64" cy="64" r="61" fill="none" stroke="rgba(255,255,255,0.17)" stroke-width="2"/>
${monogram}
</svg>`;

    // Convert SVG to a data URL usable in <img src="">
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default generateAlternativeImage;
