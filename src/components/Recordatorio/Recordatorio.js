import React, { Component } from "react";

class Recordatorio extends Component {  
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>
          {
              this.props.historial.slice(0,-1).map((e, i)=><li key = {i}>{e}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Recordatorio;