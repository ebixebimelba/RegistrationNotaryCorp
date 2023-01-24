export default function Buttons(props: ButtonsProps) {
  return (
    <>
      <div
        className={`absolute text-center font-medium font-['Poppins'] transition-all ${
          props.type === "BLUE_TYPE"
            ? "w-24 h-8 top-8 right-10 text-[rgba(0,158,247,1)]"
            : ""
        } ${
          props.type === "BLUE_TYPE1"
            ? "h-12 w-[452px] top-[856px] right-[829px] text-[rgba(245,248,250,1)]"
            : ""
        }`}
      >
        <div
          className={`inset-0 absolute rounded transition-all ${
            props.type === "BLUE_TYPE" ? "bg-white" : ""
          } ${props.type === "BLUE_TYPE1" ? "bg-[rgba(0,158,247,1)]" : ""}`}
         />
        <p
          className={`inset-x-2 h-6 absolute text-sm inline m-0 top-[calc(50%_-_12px_+_0px)] leading-[normal] transition-all ${
            props.type === "BLUE_TYPE" ? "w-20" : ""
          } ${props.type === "BLUE_TYPE1" ? "w-[436px]" : ""}`}
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

Buttons.defaultProps = {
  type: "BLUE_TYPE",
  text: "Register",
};

interface ButtonsProps {
  type: "BLUE_TYPE" | "BLUE_TYPE1";
  text: string;
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
