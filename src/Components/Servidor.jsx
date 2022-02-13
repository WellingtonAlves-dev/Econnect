import { useEffect, useState } from "react";
import connect from "./1.png";
import disconnect from "./2.png";
import loading from "./3.gif";
const portscanner = window.require("portscanner");
const notifier = window.require('node-notifier');
const path = window.require("path");
const Servidor = ({servidorInfo}) => {
    const [status, setStatus] = useState(servidorInfo.status);
    const [statusAnterior, setStatusAnterior] = useState(false);
    useEffect(() => {
        setInterval(() => {
            portscanner.checkPortStatus(servidorInfo.port, servidorInfo.ip, function(error, statusPort) {
                // Status is 'open' if currently in use or 'closed' if available
                if(statusPort == "open") {
                    if(status != "connect") {
                        setStatus("connect");
                    }
                }
                else {
                    if(status != "disconnect") {
                        setStatus("disconnect");
                    }
                }
            })
        }
        , 500);
    }, []);

    return (
        <div>
            <h1>
                {
                    status === "test"
                    ?
                    <>
                    {servidorInfo.nome}
                    </>
                    :
                        status === "connect"
                        ?
                        <>
                        {servidorInfo.nome} - <span style={{color: 'green'}}>ON</span>
                        </>
                        :
                        <>
                        {servidorInfo.nome} - <span style={{color: 'red'}}>OFF</span>
                        </>

                }
            </h1>
            <img src={status === "test" ? loading : status === "connect" ? connect : disconnect} style={{maxHeight: "400px"}}/>
            <h2>{servidorInfo.ip}</h2>
        </div>
    )
}

export default Servidor;