import "./App.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const types = ["square", "circle"];

const Figure = () => {
  let [type, setType] = useState("square");
  let { view } = useParams();

  const func = () => {
    setType(view);
  };

  return (
    <div>
      <div className={type}>vgljfkgjfkgj</div>
      <div>
        {types.map((item) => {
          return (
            <Link to={`/${item}`}>
              <button onClick={func}>{item}</button>
            </Link>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Figure;
