import Auto from "../../Cars.json";
import Cars from "../Cars/Cars";

const App = () => {
  return (
    <div>
      <Cars listCars={Auto} />
    </div>
  );
};

export default App;
