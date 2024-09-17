import "./App.css";

function App() {
  const helloWorld = "Hello world";
  return (
    <div className="App">
      <User name="jesus" age={34} email="polibos@gmail.com" />
      <User name="sarai" age={33} email="sarai@gmail.com" />
      <User />

      <Job salary={90000} position={"Senior SDE"} company="amazon" />
      <Job salary={12000} position={"Junior SDE"} company="Google" />
      <Job salary={100000} position={"Manager"} company="Netflix" />
    </div>
  );
}

const User = ({ name, age, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>
    </div>
  );
};

const Job = ({ salary, position, company }) => {
  return (
    <div>
      <h1>{salary}</h1>
      <h1>{position}</h1>
      <h1>{company}</h1>
    </div>
  );
};

export default App;
