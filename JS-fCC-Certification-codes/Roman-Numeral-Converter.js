//Convert the given number into a roman numeral.

//Roman numerals	Arabic numerals
//M	1000
//CM	900
//D	500
//CD	400
//C	100
//XC	90
//L	50
//XL	40
//X	10
//IX	9
//V	5
//IV	4
//I	1
//All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
  const roman_num={1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',  80:'LXXX',90:'XC',100:'C',200:'CC',300:'CCC',400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',1000:'M',2000:'MM',3000:'MMM'}
  let a= num.toString().split('');
  let b=[];
  let t=1;
  let result;
  for(let j=t;j<a.length;j++){
    t*=10;
  }
  if(a.length==1 && roman_num.hasOwnProperty(a[0])){
    return result=roman_num[a[0]];
  }else{
    for(let i=0;i<a.length;i++){
      b.push(a[i]*t);
      t/=10;
    }
  }
  b=b.filter(item=>roman_num.hasOwnProperty(item));
  result=b.map(res=>roman_num[res]).join('');
 return result;
}
