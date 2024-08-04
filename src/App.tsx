import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";

function App() {
  // const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   console.log("Executando a função....");
  // }, []);

  // O useEffct será disparado sempre que alguma variavel fo array de dependencia for alterada
  // Por padrão, sempre que o useEffect seré disparado apos a montagem do componete (componentDidMount)

  return (
    <>
      <Header />
      <Tasks />
    </>
  );
}

export default App;
