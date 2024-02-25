import { useDispatch, useSelector } from "react-redux";
import { icecreamActions } from "../features/icecreamSlice";
const { ordered, restocked } = icecreamActions;

const IcecreamView = () => {
  const availableIcecreams = useSelector(
    (state) => state.icecream.noOfIcecream
  );
  const dispatchOrder = useDispatch();
  const dispatchRestocked = useDispatch();

  return (
    <div>
      <h3> Cake Component</h3>
      <h4>Available Cakes : {availableIcecreams}</h4>
      <button onClick={() => dispatchOrder(ordered())}>Buy Icecream</button>
      <button onClick={() => dispatchRestocked(restocked(1))}>
        Restore Icecream
      </button>
    </div>
  );
};

export default IcecreamView;
