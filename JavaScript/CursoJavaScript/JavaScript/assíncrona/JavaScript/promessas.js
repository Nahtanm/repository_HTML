// Promessas
function myDisplayer(some) {
  document.getElementById("promise").innerHTML = some;
}

let minhaPromessa = new Promise(function (minhaResolucao, minhaRejeicao) {
  let x = 0;

  if (x == 0) {
    console.log("Sucesso");
    minhaResolucao("Sucesso PROMISE");
  } else {
    minhaRejeicao("error");
  }
});

minhaPromessa.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);

async function myDisplay() {
  let promise = new Promise(function (resolve) {
    resolve("Sucesso ASYNC");
  });
  document.getElementById("demo").innerHTML = await promise.then();
}

myDisplay();
