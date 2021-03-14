
const a1:number = 1;

function a(){
  const b1 = 2;
  console.log(a1);

  function d(){
    console.log(b1 + a1);

  }

  d();
}

a();