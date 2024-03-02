import TodoComponent from "./TodoComponent";
import SearchComponent from "./SearchComponent";
import TicTocComponent from "./TicTocComponent";
import FormComponent from "./FormComponent";

const HomePage = () => {
  return (
    <div className="container">
      <div className="space">
        <h1> Home Page - Containst Machine Coding Collection</h1>
        <h3>Todo List Compoent</h3>
        <TodoComponent />
        <h3>Autocomplete Compoent</h3>
        <SearchComponent />
        <h3>Tic Toc Game Compoent</h3>
        <TicTocComponent />
        <h3>Simple Form Compoent</h3>
        <FormComponent />
      </div>
    </div>
  );
};

export default HomePage;
