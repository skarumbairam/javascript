import { useState } from "react";
import { AccordianData } from "../util/data";
const AccordianComponent = () => {
  return (
    <>
      {AccordianData.map((data, index) => {
        return <AccordianItem dataProps={data} showItem={index === data.id} />;
      })}
    </>
  );
};

const AccordianItem = ({ dataProps }) => {
  const [active, setActive] = useState(false);
  const clickHandler = () => {
    setActive(!active);
  };
  return (
    <div className="accItem" onClick={clickHandler}>
      <div className="title">
        <div>{dataProps.title}</div>
        <div className="icon" onClick={clickHandler}>
          {active ? <span>-</span> : <span>+</span>}
        </div>
      </div>

      {active && (
        <div className="description">
          <p>{dataProps.content}</p>
        </div>
      )}
    </div>
  );
};
export default AccordianComponent;
