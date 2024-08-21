import TodoList from "./components/TodoList";

const GetWidth = (): JSX.Element => {
  const width = document.body.clientWidth;

  return <h1>{width}</h1>;
};

function App() {
  return (
    <div className="App">
      <GetWidth />
      <TodoList />
    </div>
  );
}

export default App;
