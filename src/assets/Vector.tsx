export default function Vector(props: VectorProps) {
  return (
    <div className="inset-x-0 absolute flex top-[12.5%] bottom-[12.5%]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 2.632 3.527 L 1.364 2.205 C 1.052 1.88 0.546 1.88 0.234 2.205 C-0.078 2.53 -0.078 3.057 0.234 3.382 L 2.526 5.77 C 2.82 6.077 3.297 6.077 3.591 5.77 L 7.766 1.421 C 8.078 1.096 8.078 0.569 7.766 0.244 C 7.454 -0.081 6.948 -0.081 6.636 0.244 L 3.485 3.527 C 3.249 3.772 2.868 3.772 2.632 3.527 Z"
          fill="white"
         />
      </svg>
    </div>
  );
}

Vector.defaultProps = {};

interface VectorProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
