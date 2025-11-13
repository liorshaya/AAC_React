import Hw3L from "./Client.jsx";
import Client from "./Client.jsx";


function ClientsData(){
    const client1 ={
        name: "Lior",
        phone: "999999",
        totalPurchases: 14
    }
    const client2 ={
        name: "Maya",
        phone: "243499",
        totalPurchases: 4
    }

    return(
        <>
            <Client data={client1}/>
            <Client data={client2}/>
        </>

    )
}

export default ClientsData;