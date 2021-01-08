
function StepsHeader() {
    return (
    <header className="orders-steps-container">
        <div className="orders-steps-content">
          <h1 className="steps-title">
              SIGA AS <br /> ETAPAS
          </h1>
            <ul>
                <li>
                 <span className="steps-number"> <strong>1 </strong> </span>
                    Selcione os produtos e localização.
                </li>
                <li>
                 <span className="steps-number"> <strong>2 </strong> </span>
                    Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                </li>
            </ul>
        </div>
    </header>
    )
}
export default StepsHeader;