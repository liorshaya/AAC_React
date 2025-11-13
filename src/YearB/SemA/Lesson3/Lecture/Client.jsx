

function Client(props) {
    const client = props.data;

    return(
        <>
            <div style={{
                border: "1px solid blue"
            }}>
                <div>Name: {client.name} </div>
                <div>Phone: {client.phone} </div>
                <div>Total Purchases: {client.totalPurchases}</div>
                {
                    client.totalPurchases > 10 &&
                    <div> VIP Client</div>
                }
            </div>

        </>

    )
}

export default Client;