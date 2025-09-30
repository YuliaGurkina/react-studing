import useViewportSize from "./useViewportSize";
import "./App.css";

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );


}export default Demo;