/* Dado el siguiente array, muestra por consola la suma de premios de los jugadores de uruguay */

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]

const jugadoresUruguay = players
                        .filter(player => player.country ==='Uruguay')
                        .reduce((acc, x) =>  acc + x.goldenBall, 0);

console.log('A- Juagadores Premiados de Uruguay: ');
console.log(jugadoresUruguay);
console.log("\n");
/* Dado el siguiente array:*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
    // {name: 'Amancio', amount: 90, age: 64, country:'Spain', company:'Diversified', industry: 'Textil'},
]

//1) Muestra por consola el listado de nombres de los millonarios
const listadoMillonarios = forbesList.map(milloneti => milloneti.name);
console.log("1- Listado de millonario: ");
console.log (listadoMillonarios);
console.log ("\n");

// 2) Muestra por consola (true/false) si está Amancio en la lista
const existeMillonario= forbesList
                        .map(milloneti => milloneti.name === "Amancio")
                        .reduce((acc, x) => acc != x);

console.log("2- ¿Existe Amancio? ");
console.log(existeMillonario);
console.log ("\n");

// 3) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen
const edadPatrimonio = forbesList.map(milloneti => Number(milloneti.amount / milloneti.age).toPrecision(3));
console.log("3- Patrimonio sobre edad: ");
console.log(edadPatrimonio);
console.log ("\n");

// 4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
const mediaEdadMillonetis = forbesList.reduce((acumu, x) => acumu = (acumu + x.age) , 0) / forbesList.length
console.log("4- Edad Media millonarios: ");
console.log (mediaEdadMillonetis);
console.log ("\n");

// 5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
const sumaPastaMillonetis = forbesList
                            .filter(milloneti => milloneti.industry === 'Technology')
                            .reduce((acumu, x) => acumu + x.amount, 0);

console.log("5- Suma dinero millonarios: ");
console.log(sumaPastaMillonetis);
console.log ("\n");

// 6) Muestra por consola el millonario más joven que no sea de EEUU
const millonetiNoAmericano = forbesList
                            .sort((x,y) => x.age - y.age)
                            .filter(milloneti => milloneti.country !=='EEUU')
                            .slice(0,1)

console.log("6- Millonario mas joven no americano: ");
console.log(millonetiNoAmericano);
console.log ("\n");

// const masJoven = forbesList.reduce((acumu, x) => acumu < x.age,0);
// console.log(masJoven)

// 7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
const millonarioMasJoven = forbesList
                          .filter(milloneti => milloneti.country ==="EEUU")
                          .sort((x,y) => y.amount - x.amount)
                          .slice(0, 5)
                          .sort((x,y) => y.age - x.age)
                          .slice(0,1)
 
console.log("7- Millonario mas Joven de EEUU: ");
console.log(millonarioMasJoven);
console.log ("\n");

// 8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
const medidasMillonarios = forbesList
                          .filter(milloneti => milloneti.company === 'Google' || milloneti.company === 'Microsoft')
                          .map(milloneti => milloneti.age)
                          .reduce((acumu, x) => acumu + x, 0);

console.log("8- Medidas de Google y Microsoft: ");
console.log(medidasMillonarios);
console.log ("\n");