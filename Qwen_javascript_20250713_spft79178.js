async function parseUserQuery(input) {
  const query = input.toLowerCase();

  if (query.includes("кофе") || query.includes("кофейня")) return "cafe";
  if (query.includes("билет")) return "event";
  if (query.includes("одежда") || query.includes("магазин")) return "shop";

  return "unknown";
}