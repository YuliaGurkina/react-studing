import { useHover } from './useHover';
import "./App.css";

function Demo() {
const { hovered, ref } = useHover<HTMLDivElement>();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default Demo;
