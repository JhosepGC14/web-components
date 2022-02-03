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

    inputCustom.addEventListener("keyup", (e) => {
      console.log("inputCustom.value : ", inputCustom.value);
      let lastValue = inputCustom.value.substr(inputCustom.value.length - 1);
      console.log("lastValue : ", lastValue);
      divInputCustom.textContent += lastValue;
      inputCustom.value = inputCustom.value.replace(/[A-Za-z10-9]/g, "|");
    });

    //EJERCICIO N°2
    let weightValue = this._shadowRoot.getElementById("inputPeso");
    let heightValue = this._shadowRoot.getElementById("inputEstatura");
    let btnCalculate = this._shadowRoot.getElementById("btnCalcularImc");
    let resultIMC = this._shadowRoot.getElementById("resultIMC");
    let imageResult = this._shadowRoot.getElementById("imageResult");

    const calculateImc = () => {
      if (weightValue.value && heightValue.value) {
        let newHeight = Math.pow(Number(heightValue.value), 2);
        let result = Number(weightValue.value) / newHeight;
        resultIMC.innerHTML = `
        Resultado : ${result.toFixed(2)}
        
        Tienes : ${getImageAsResult(result).text}`;
        imageResult.setAttribute("src", getImageAsResult(result).image);
      }
    };

    const getImageAsResult = (resultImc) => {
      if (resultImc < 15) {
        return {
          text: "Delgadez muy severa",
          image:
            "https://doblementesaludable.com/wp-content/uploads/2019/01/Delgadez-extrema-7.jpg",
        };
      } else if (resultImc > 15 && resultImc < 15.9) {
        return {
          text: "Delgadez severa",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw1TJmBXMp_k04hch_yrE1NTwppovhLteRhA&usqp=CAU",
        };
      } else if (resultImc > 16 && resultImc < 18.4) {
        return {
          text: "Delgadez",
          image: "http://endocrino.cat/IMAGES_26/dieta-delgadez.jpg",
        };
      } else if (resultImc > 18.5 && resultImc < 24.9) {
        return {
          text: "Peso saludable",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2WKFdLtBIOaGf_F2RwU0qk4ZaaZU7gRKZw&usqp=CAU",
        };
      } else if (resultImc > 25 && resultImc < 29.9) {
        return {
          text: "Sobrepeso",
          image:
            "https://www.portafolio.co/files/article_multimedia/uploads/2016/02/07/56b789fd73d81.jpeg",
        };
      } else if (resultImc > 30 && resultImc < 34.9) {
        return {
          text: "Obesidad moderada",
          image:
            "https://918230.smushcdn.com/2283449/wp-content/uploads/2020/05/ecoticias.jpg?lossy=1&strip=1&webp=1",
        };
      } else if (resultImc > 35 && resultImc < 39.9) {
        return {
          text: "Obesidad severa",
          image:
            "https://www.elindependiente.com/wp-content/uploads/2020/06/20200108285db5a42486a2e4728937cb6dacfdbb.jpg",
        };
      } else if (resultImc > 40) {
        return {
          text: "Obesidad muy severa",
          image:
            "https://www.iidenut.org/instituto/wp-content/uploads/2021/03/60-obesidad-y-covid.jpg",
        };
      }
    };

    btnCalculate.addEventListener("click", calculateImc);
  }
}

window.customElements.define(NeoInput.is, NeoInput);
