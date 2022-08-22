// For

var q = [];
function nass() {
  var arr = [1, 2, 3, 4, 5, 6];
   for (let i = 0; i < arr.length; i++) {
    q.push(arr[i] * 2);
  }
  return q;
}
nass();

console.log(nass(), "boucle For");

// for
var u = [1, 2, 3, 4, 5, 6];
var b = u.map((el) => el * 2);
console.log(b, "Map Function");

//sum
var faf = [1, 2, 3, 4, 5, 6];
var i = 0;
var h = faf.map((el) => (i = i + el));

console.log(i, "ne7sbou sum mta3 les element mta array");

//If
var k = [1, 2, 3, 4, 5, 6, 7];
var j = [];
function kaza() {
  for (let i = 0; i < k.length; i++) {
    if (k[i] < 4) {
      j.push(k[i]);
    }
  }
  return j;
}
console.log(kaza(), "If condition");

//if
var y = [1, 2, 3, 4, 5, 6];
var t = [];
var result = y.filter((x) => x < 4).map((el) => t.push(el));
console.log(result, "condition with Map and filter Function");


//if else
var con = 9;
var son = 5;

function ko() {
  if (con < son) {
    return "yes  ";
  } else {
    return "no";
  }
}
console.log(ko(), "(If , else Condition)");

//-----------------------------------les fonction prédéfinie-----------------------

// Array methods
//length 

var kadech1 = 'Innova Academy'
console.log(kadech1.length)

var kadech2 = [1, 2, 3, 4, 5];
console.log(kadech2.length,'length t9oulelna kadech 3ana men valeur fest l array')



//Push()

var hotelna = [1, 2, 3, 4, 5];
hotelna.push(6);
console.log(
  hotelna,
  "7otelna Noumrou 6 fi ekher  lArray | l push() t7ot l element fi ekher l array"
);

//unshift()

var hotelnaFlowel = [1, 2, 3, 4, 5];
hotelnaFlowel.unshift(9);
console.log(
  hotelnaFlowel,
  "7otelna Noumrou 9 fi awel  lArray | l unshift() t7ot l element fi awel l array"
);

//Shift()

var na7ilna = [1, 2, 3, 4, 5];
na7ilna.shift();
console.log(
  na7ilna,
  "na7ilna awel element fl array |  shift() tna7i awl element fl array"
);

//Pop()

var na7ilnaLekhreni = [1, 2, 3, 4, 5];
na7ilnaLekhreni.pop();
console.log(
  na7ilnaLekhreni,
  "na7ilna element element fl array |  pop() tna7i ekher element fl array"
);

//Map()

var u = [1, 2, 3, 4, 5, 6];
var b = u.map((el) => el * 2);
console.log(b, "Map() t3awdh l for w tkhalina na3mlou ay traitement 3al array met3na ");

//Filter()

var j = [1, 2, 3, 4, 5, 6];
var result = j.filter((x) => x < 4);
console.log(result, " filter() tkharjelna  des element b condition");

//Join('')

var rodhomliStringWe7ed = ['academy',"Innova"];
 console.log(rodhomliStringWe7ed.join("/"),'join() trodelna les valeurs  mta3 el array valeur we7ed tna7ilna "," ');


var rodhomStringWe7edWzidlislach =  [1,2];
console.log(rodhomStringWe7edWzidlislach.join(' '),"w tnajem ba3d matrodhom valeur we7ed t7ot binethom / wala . wala ay haja theb aleha  ");



//Sort()

var nadhemli = [2,4,3,1,9];
console.log(nadhemli.sort(),"Sort() ken les valeur mta3 Array Numbers bch tnadhemhomlna ml 0 ..... ");

var nadhem7rouf = ['a','z','d','x','c','e' ,'b'];
console.log(nadhem7rouf.sort(),"w ken les valeurs mte3na Strings bch tnadhemhomlna ml A......");

 //Slice()

 var koselna = [1,2,3,4,5,6];
  console.log(koselna.slice(0,2),"slice() jibelna wa2ela koserna mel array w n7otoulou slice(min yabda, w7ata lfin)")


  //splice()

  var tableaux = [1,2,3,4,5,6];
  tableaux.splice(0,2,9)
  console.log(tableaux,'splice() tfaskhelna w tzidelna ay valeur n7ebou 3lih fi ay bod93a fl array splice(n7otou l index eli n7ebou lvaleur jdid yekhour, wba3d 9adech men valeur n7ebou nfaskhou apartire mel l index mta3 lvaleur jdid, wba3d lvaleur jdid )');

//reverse()

var e9elbelna = [1, 2, 3, 4, 5];
console.log(e9elbelna.reverse() ,'reverse() te9elbelna les valeur mta3 l array lowel iwali lekher w lekher iwali lowel ');

//fill() 

var abilna = [1, 2, 3, 4, 5];
console.log(abilna.fill(1),"fill() t3abina tablou bel valeur jdid 3la 3dad les valeur  le9dom ama tfasa5 les valeur le9dom");

// IndexOf()

var tala3lIndex = ['a', 'b', 'c', 'd', 'e'];

console.log(tala3lIndex.indexOf('c'),'indexOf() tala3li l Index mta3 l valeur eli hajti bih f array');


//flat()
 var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat(),'kiyebda 3ana Array festha Array trodhomelna Array wa7da');

 
 