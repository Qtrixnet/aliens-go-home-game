import './canvas.css';
import Sky from "../sky/sky";
import Ground from "../ground/ground";
import CannonBase from "../cannonBase/cannonBase";
import CannonPipe from "../cannonPipe/cannonPipe";

const Canvas = () => {
  const style = {
    border: '1px solid black'
  }
  const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      style={style}
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <CannonBase/>
      <CannonPipe rotation={45} />
    </svg>
  );
};

export default Canvas;
