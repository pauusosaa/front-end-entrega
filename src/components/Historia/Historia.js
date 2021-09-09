import React from "react";
import historiaCompleta from "./../data.json"

import Opciones from "./../Opciones/Opciones"
import Recordatorio from "./../Recordatorio/Recordatorio";

class Historia extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            historial : []
        }

        this.elegirOpcion = this.elegirOpcion.bind(this)
        
    }
    
    componentDidMount(){
       console.log("Se acaba de montar el componente Historia");
        this.setState({
            seleccionAnterior: "",
            contador: 1,
            narracion : historiaCompleta[0].historia,
            opcionA : historiaCompleta[0].opciones.a,
            opcionB : historiaCompleta[0].opciones.b,
            historial : []
        })
    }

    elegirOpcion(eleccion){
        const newEleccion = eleccion;
        let obj;
        if(eleccion === "A"){
            console.log(this.state.contador + 1);
             obj = historiaCompleta.find((elemento) => elemento.id === `${this.state.contador + 1}a`);   
                  
        }else{
            obj = historiaCompleta.find((elemento) => elemento.id === `${this.state.contador + 1}b`);  
        } 

        if(obj){
            this.setState((prev) =>({
             seleccionAnterior: eleccion,
             contador: this.state.contador+1,
             narracion : obj.historia,
             opcionA : obj.opciones.a,
             opcionB : obj.opciones.b,
             historial: [...prev.historial, newEleccion]
            }))
        }else{
            alert("Elegí tu siguiente historia :)")
            this.componentDidMount()
        }
       console.log(this.state);
    }

    render(){
        return(
            <div className = "layout" >
                <h1 className = "historia">{this.state.narracion}</h1>
                <Opciones opcionA = {this.state.opcionA} opcionB = {this.state.opcionB} handleClick = {this.elegirOpcion}/>
                <Recordatorio seleccionPrevia = {this.state.seleccionAnterior} historial={this.state.historial}/>

            </div>
           

        ); 
    }
}

export default Historia;