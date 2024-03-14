// glowText.js
module.exports = function ({ addUtilities }) {
  const newUtilities = {
    '.text-glow': {
      textShadow: '0 0 10px rgba(255, 165, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.5)', // Orange and white glow
    },
  };

  addUtilities(newUtilities, ['responsive', 'hover']);
};
