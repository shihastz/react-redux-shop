import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Cake Shop (using redux + hooks)</h1>
      <h2>No. of Cakes - {numOfCakes > 0 ? numOfCakes : 0}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
