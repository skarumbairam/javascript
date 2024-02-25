import { useSelector, useDispatch } from "react-redux";
import { cakeActions } from "../features/cakeSlice";
const { ordered, restocked } = cakeActions;

const CakeView = () => {
  const availableCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();

  const buyCake = () => {
    dispatch(ordered());
  };
  const restoreCake = () => {
    dispatch(restocked(1));
  };

  return (
    <div>
      <h3> Cake Component</h3>
      <h4>Available Cakes : {availableCakes}</h4>
      <button onClick={() => buyCake()}>Buy Cake</button>
      <button onClick={restoreCake}>Restore Cake</button>
    </div>
  );
};

export default CakeView;
