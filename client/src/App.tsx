import { Card } from "./components/Card";

function App() {
  return (
    <>
      <div className="card">
        {/* Just an example to showcase Card component, we will remove this in further iterations */}
        <Card>
          <Card.Header>
            <h1>Signup</h1>
          </Card.Header>
          <Card.Body>
            <input
              type="text"
              name="price"
              id="price"
              class="block w-full rounded-md p-4 border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="test@example.com"
            />
            <input
              type="text"
              name="price"
              id="price"
              class="block w-full rounded-md p-4 border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="******"
            />
          </Card.Body>
          <Card.Footer>
            <button className="border-pink-200 bg-gray-400 hover:bg-gray-700 p-2 text-white">
              Submit
            </button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default App;
