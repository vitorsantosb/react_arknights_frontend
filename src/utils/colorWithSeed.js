export function colorWithSeed(seed) {
  if (typeof seed === "string") {
    seed = seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }

  let color = Math.floor(Math.abs(Math.sin(seed) * 16777215)).toString(
    16
  );

  // pad any colors shorter than 6 characters with leading 0s
  while (color.length < 6) {
    color = "0" + color;
  }

  return "#" + color;
}
