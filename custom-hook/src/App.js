import UseCoustom from "./components/UseCoustom";



function App() {
  const [t] = UseCoustom('https://jsonplaceholder.typicode.com/todos/');
  console.log(t)
  return (
    <>

    </>
  );
}

export default App;
