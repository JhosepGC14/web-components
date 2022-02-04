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
