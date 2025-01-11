import React from 'react';

type AvatarSVGProps = {
  hash: string;
};

export const generateAvatarSVG = (hash: string) => {
  // Generate a seed that includes the effect of each character in the hash
  let seed = Array.from(hash).reduce((acc, char) => acc + char.charCodeAt(0), 0);

  function random(max: number) {
    const x = Math.sin(seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  }

  const size = 100;
  const shapeSize = 30 + random(40);
  const numShapes = 2 + random(3);

  const colors = [
    '#39FF14', // Neon Green
    '#FF073A', // Neon Red
    '#0AB9F2', // Electric Blue
    '#FF61F6', // Neon Pink
    '#FFF700', // Neon Yellow
    '#8D00FF', // Neon Purple
  ];
  const backgroundColor = colors[random(colors.length)];

  let svgContent = `<rect width="${size}" height="${size}" fill="${backgroundColor}" />`;

  for (let i = 0; i < numShapes; i++) {
    const shapeColor = colors[random(colors.length)];
    const x = random(size - shapeSize);
    const y = random(size - shapeSize);

    const shapeType = random(4);
    if (shapeType === 0) {
      const radius = shapeSize / 2;
      svgContent += `<circle cx="${x + radius}" cy="${y + radius}" r="${radius}" fill="${shapeColor}" />`;
    } else if (shapeType === 1) {
      svgContent += `<rect x="${x}" y="${y}" width="${shapeSize}" height="${shapeSize}" fill="${shapeColor}" />`;
    } else if (shapeType === 2) {
      const x1 = x + shapeSize / 2;
      const y1 = y;
      const x2 = x;
      const y2 = y + shapeSize;
      const x3 = x + shapeSize;
      const y3 = y + shapeSize;
      svgContent += `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${shapeColor}" />`;
    } else if (shapeType === 3) {
      const x2 = x + random(size - x);
      const y2 = y + random(size - y);
      svgContent += `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${shapeColor}" stroke-width="20"/>`;
    }
  }

  return svgContent;
};

export const AvatarSVG: React.FC<AvatarSVGProps> = ({ hash }: { hash: string }) => {
  const svgContent = generateAvatarSVG(hash);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default AvatarSVG;
