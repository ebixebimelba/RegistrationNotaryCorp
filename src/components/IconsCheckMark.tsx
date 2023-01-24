import Vector from "assets/Vector";

export default function IconsCheckMark(props: IconsCheckMarkProps) {
  return (
    <>
      <div
        className={`absolute left-[10.76%] right-[88.68%] transition-all ${
          props.type === "TYPE" ? "top-[23.2%] bottom-[76.36%]" : ""
        } ${props.type === "TYPE1" ? "top-[40.4%] bottom-[59.16%]" : ""}`}
      >
        <div className="inset-0 absolute" />
        {props.type === "TYPE" && <Vector />}
        {props.type === "TYPE1" && <Vector />}
      </div>
    </>
  );
}

IconsCheckMark.defaultProps = {
  type: "TYPE",
};

interface IconsCheckMarkProps {
  type: "TYPE" | "TYPE1";
}

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
