import ToDo from "./ToDo";
import Cards from "./Cards";
import AutoComplete from "./AutoComplete";
import TicTocToe from "./TicTocToe";

const Component = () => {
  return (
    <div>
      <h1>Component Page</h1>
      <TicTocToe />
      <AutoComplete />
      <ToDo />
      <Cards />
    </div>
  );
};

export default Component;
