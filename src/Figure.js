import "./App.css";
import { Link, useParams } from "react-router-dom";

const Figure = () => {
  let { view } = useParams();
  let { color } = useParams();

  return (
    <div>
      <div className={view} style={{ backgroundColor: color }}>
        FIGURE
      </div>
    </div>
  );
};

export default Figure;
