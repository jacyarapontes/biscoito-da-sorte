
import React, {Component} from "react";
import'./estilo.css'


class App extends Component{ 


  constructor(props){
    super(props);
    this.state = { 
      textFrase:''
    };

    this.quebraBiscoito=this.quebraBiscoito.bind(this)
    
  this.frases = ['Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.',
  'A persistência realiza o impossível.','Seus sonhos não precisam de plateia, eles só precisam de você.',
  'A persistência é o caminho do êxito.','No meio da dificuldade encontra-se a oportunidade.',
  'É parte da cura o desejo de ser curado.'

  ];
  }
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() *this.frases.length);
    state.textFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  

  
  render(){
    return(
      <div className="container">
        <img alt="biscoito" src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textFrase}</h3>

  
      </div>


    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button className="botao" onClick={this.props.acaoBtn} >{this.props.nome}</button>
      </div>
    )
  }
}
export default App;