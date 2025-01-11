
const cyberpunkWords = [
    "electric", "neon", "buzz", "shadow", "chrome", "pulse", "zero", "byte", "laser", "nova",
    "spark", "glitch", "cyber", "data", "flux", "gear", "hack", "ion", "jump", "kilo",
    "light", "matrix", "nano", "optic", "power", "quantum", "radar", "signal", "tech", "ultra",
    "vision", "warp", "xeno", "yotta", "zen", "alpha", "beta", "delta", "gamma", "omega",
    "vortex", "storm", "blade", "fusion", "gravity", "hyper", "ignite", "jet", "krypton", "lumina",
    "arc", "blade", "circuit", "drive", "echo", "forge", "glyph", "halo", "ignite", "jet",
    "kinetic", "latch", "mach", "nexus", "orbit", "phantom", "quartz", "reactor", "spectrum", "terminal",
    "uplink", "vector", "whisper", "x-ray", "zephyr", "bytecode", "fusion", "glow", "holo", "infra",
    "junction", "krypton", "lumina", "mod", "net", "orbitron", "pyro", "quasar", "ray", "sparkplug",
    "tachyon", "ultron", "visionary", "wave", "xenon", "yonder", "zeta", "deltaforce", "fluxwave", "gearshift"
    ]

export function generateCyberpunkName(): string {
    if (cyberpunkWords.length < 50) {
      throw new Error("The word list must contain at least 50 words.");
    }
  
    // Helper function to randomly pick an element from an array
    const getRandomElement = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
    // Randomly select two words or partial words
    const word1 = getRandomElement(cyberpunkWords);
    const word2 = getRandomElement(cyberpunkWords);
  
    // Create partial variations of words
    const partial1 = word1.slice(0, Math.max(3, Math.floor(Math.random() * word1.length)));
    const partial2 = word2.slice(Math.max(0, word2.length - Math.floor(Math.random() * word2.length)), word2.length);
  
    // Randomly decide if the words should be full or partial
    const usePartial1 = Math.random() > 0.5;
    const usePartial2 = Math.random() > 0.5;
  
    // Combine words/partials into a cool name
    const name = `${usePartial1 ? partial1 : word1} ${usePartial2 ? partial2 : word2}`;
  
    // Capitalize the first letter of each word
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
