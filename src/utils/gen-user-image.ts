export const generateAvatarSVG = (hash: string) => {
  // Generate a seed from the hash for repeatable pseudo-randomness
  let seed = parseInt(hash.slice(0, 8), 16);

  // Helper function for generating random numbers based on the seed
  function random(max: number) {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  }

  // Set SVG dimensions
  const size = 100;
  const shapeSize = 30 + random(40); // Shape size between 30 and 70
  const numShapes = 2 + random(3); // Number of shapes (between 2 and 4)

  // Define some colors
  const colors = [
    '#39FF14', // Neon Green
    '#FF073A', // Neon Red
    '#0AB9F2', // Electric Blue
    '#FF61F6', // Neon Pink
    '#FFF700', // Neon Yellow
    '#8D00FF', // Neon Purple
  ];
  const backgroundColor = colors[random(colors.length)];

  // Start creating the SVG
  let svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">`;
  svg += `<rect width="${size}" height="${size}" fill="${backgroundColor}" />`;

  // Add randomly positioned shapes
  for (let i = 0; i < numShapes; i++) {
    const shapeColor = colors[random(colors.length)];
    const x = random(size - shapeSize);
    const y = random(size - shapeSize);

    const shapeType = random(4); // 0: Circle, 1: Rectangle, 2: Triangle, 3: Line
    if (shapeType === 0) {
      // Draw a circle
      const radius = shapeSize / 2;
      svg += `<circle cx="${x + radius}" cy="${y + radius}" r="${radius}" fill="${shapeColor}" />`;
    } else if (shapeType === 1) {
      // Draw a rectangle
      svg += `<rect x="${x}" y="${y}" width="${shapeSize}" height="${shapeSize}" fill="${shapeColor}" />`;
    } else if (shapeType === 2) {
      // Draw a triangle
      const x1 = x + shapeSize / 2;
      const y1 = y;
      const x2 = x;
      const y2 = y + shapeSize;
      const x3 = x + shapeSize;
      const y3 = y + shapeSize;
      svg += `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${shapeColor}" />`;
    } else if (shapeType === 3) {
      // Draw a line
      const x2 = x + random(size - x); // End point x
      const y2 = y + random(size - y); // End point y
      svg += `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${shapeColor}" stroke-width="2"/>`;
    }
  }

  // Close the SVG tag
  svg += `</svg>`;

  return svg;
};

// const avatarSVG = generateAvatarSVG('e84c1218');
