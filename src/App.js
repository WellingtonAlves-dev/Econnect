import Servidor from "./Components/Servidor";

function App() {

  const servidores = [
    {
      nome: "ADMINISTRATIVO",
      ip: "10.67.150.10",
      port: 465,
      status: "test",
    },
    {
      nome: "NSA",
      ip: "10.67.150.9",
      port: 465,
      status: "test",
    },
    {
      nome: "BACKUP",
      ip: "10.67.150.8",
      port: 465,
      status: "test",
    },
  ];

  return (
		<div className='container'>
			{servidores.map((servidor) => {
        return <Servidor servidorInfo={servidor} key={servidor.ip}/>
      })}
		</div>
  );
}

export default App;
