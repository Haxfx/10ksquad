interface WaveDividerProps {
  className?: string;
  fillColor?: string;
}

const WaveDivider = ({ className = '', fillColor = '#2A0F55' }: WaveDividerProps) => {
  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-auto"
      >
        <path
          d="M0,40 C240,120 480,0 720,40 C960,80 1200,0 1440,40 V120 H0 V40Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;