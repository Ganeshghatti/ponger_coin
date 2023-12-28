import { leapfrog } from "ldrs";
leapfrog.register();

function Spinnerf() {
  const transparentBgStyle = {
    background: "rgba(255, 255, 255, 0.5)",
    zIndex: 1000, 
  };

  return (
    <section
      className="items-center justify-center w-screen h-screen fixed flex top-0 left-0"
      style={transparentBgStyle}
    >
      <l-leapfrog size="40" speed="2.5" color="black"></l-leapfrog>{" "}
    </section>
  );
}

export default Spinnerf;
