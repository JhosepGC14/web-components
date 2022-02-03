const tpl = document.createElement("template");

/*
   1) construyan un input custom ---> de tipo password , pero que al escribir el valor , se remplace por pipe 
   2) obtener el valor del input y escribilo en el  div , 
   3) agregar uno o mas inputs input dentro de este mismo js, que haga el calculo del IMC
   3.1) agregar una imagen que represente el resultado del imc 
   4) opcional, tener la posibilidad de crear elementos dinamicamente que se puedan utilizar  ejemplo
      input con descripcion , poner boton mostrar y muestra todo en texto plano dentro de un div
       

   */

tpl.innerHTML = `
    <h2>Ejercicio 1 y 2</h2> 
    <input id="inputCustom" type="text" placeholder="password"/>
    <br/>
    <div id="resultInputCustom"></div>
    <br/>

    <h2>Ejercicio 3 (IMC)</h2> 
    <label for="inputPeso">Peso (kg):</label>
    <input id="inputPeso" type="number" placeholder="Peso"/>
    <br/>
    <br/>
    <label for="inputEstatura">Estatura(metros):</label>
    <input id="inputEstatura" type="number" placeholder="Estatura"/>
    <br/>
    <br/>
    <button id="btnCalcularImc">Calcular</button>
    <h4 id="resultIMC"></h4>
    <img id="imageResult"style="max-width: 300px"/>
`;

class NeoInput extends HTMLElement {
  static get is() {
    return "neo-input";
  }

  constructor() {
    super();

    // property _shadow = private shadow <--- la variable es privada
    this._shadowRoot = this.attachShadow({ mode: "open" }); // chrome ---> developer tools ---> shadowDoom shadowRoot --->

    this._shadowRoot.appendChild(tpl.content.cloneNode(true));

    // let nombre = this._shadowRoot.querySelector("input");
    // let div = this._shadowRoot.querySelector("div");
    // let btn = this._shadowRoot.querySelector("button");

    // // al boton le adjunto un eventop
    // btn.addEventListener("click", () => {
    //   console.log("hola " + nombre.value);
    //   div.innerHTML += nombre.value;
    // });

    //EJERCICIO N°1
    let inputCustom = this._shadowRoot.getElementById("inputCustom");
    let divInputCustom = this._shadowRoot.getElementById("resultInputCustom");
    inputCustom.addEventListener("change", (e) => {
      let lastValue = inputCustom.value;
      inputCustom.value = "";
      for (let index = 0; index < lastValue.length; index++) {
        inputCustom.value += "|";
      }
      divInputCustom.innerHTML = lastValue;
    });
    // inputCustom.addEventListener("keypress", (e) => {
    //   let lastValue = inputCustom.value;
    //   inputCustom.value = "";
    //   for (let index = 0; index < lastValue.length; index++) {
    //     inputCustom.value += "|";
    //   }
    //   divInputCustom.innerHTML = lastValue;
    // });

    //EJERCICIO N°2
    let weightValue = this._shadowRoot.getElementById("inputPeso");
    let heightValue = this._shadowRoot.getElementById("inputEstatura");
    let btnCalculate = this._shadowRoot.getElementById("btnCalcularImc");
    let resultIMC = this._shadowRoot.getElementById("resultIMC");
    let imageResult = this._shadowRoot.getElementById("imageResult");

    // "http://endocrino.cat/IMAGES_26/dieta-delgadez.jpg" bajo peso

    const calculateImc = () => {
      if (weightValue.value && heightValue.value) {
        let newHeight = Math.pow(Number(heightValue.value), 2);
        console.log("newHeight...", newHeight);
        console.log("newHeight...", typeof newHeight);
        let result = Number(weightValue.value) / newHeight;
        console.log("result...", result);
        console.log("result...", typeof result);
        resultIMC.innerHTML = result;
        imageResult.setAttribute("src", getImageAsResult(result));
      }
    };

    const getImageAsResult = (resultImc) => {};

    btnCalculate.addEventListener("click", calculateImc);
  }
}

window.customElements.define(NeoInput.is, NeoInput);
