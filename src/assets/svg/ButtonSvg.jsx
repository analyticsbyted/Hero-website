const ButtonSvg = ({ white }) => {
  // Determine gradient colors based on the 'white' prop
  const gradientColors = white
    ? {
        left: ["#ffffff", "#f2f2f2"], // White gradient
        top: ["#f2f2f2", "#e6e6e6"],
        bottom: ["#e6e6e6", "#d9d9d9"],
        right: ["#d9d9d9", "#ffffff"],
      }
    : {
        left: ["#89F9E8", "#FACB7B"], // Original gradient
        top: ["#D87CEE", "#FACB7B"],
        bottom: ["#9099FC", "#89F9E8"],
        right: ["#9099FC", "#D87CEE"],
      };

  return (
    <svg style={{ display: "block", width: 0, height: 0 }}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: gradientColors.left[0] }} />
          <stop offset="100%" style={{ stopColor: gradientColors.left[1] }} />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" style={{ stopColor: gradientColors.top[0] }} />
          <stop offset="100%" style={{ stopColor: gradientColors.top[1] }} />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" style={{ stopColor: gradientColors.bottom[0] }} />
          <stop offset="100%" style={{ stopColor: gradientColors.bottom[1] }} />
        </linearGradient>
        <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: gradientColors.right[0] }} />
          <stop offset="100%" style={{ stopColor: gradientColors.right[1] }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonSvg;
