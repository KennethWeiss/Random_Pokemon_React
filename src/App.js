import "./styles.css";
import "./LoginForm";
import "./RandomPokemon";
import LoginForm from "./LoginForm";
import RandomPokemon from "./RandomPokemon";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <LoginForm />
      <RandomPokemon />
    </div>
  );
}
