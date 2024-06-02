


//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = "10";
let nums = 10;
console.log(num === nums);
console.log(Number(num) === nums);

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float = 9.8;
console.log(nums == float);
console.log(nums == Math.round(float));

//Check if 'on' is found in both python and jargon
let python = "python";
let jargon = "jargon";
console.log(python.includes("on"));
console.log(jargon.includes("on"));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("I hope this course is not full of jargon".includes(jargon));

//Generate a random number between 0 and 100 inclusively.
let randomNum = Math.random() * 100;
console.log(randomNum);

//Generate a random number between 50 and 100 inclusively.
console.log(Math.random(50) * 100);

// Generate a random number between 0 and 255 inclusively.
console.log(Math.random(0) * 225);

//Access the 'JavaScript' string characters using a random number.
let java = "javaScript";
console.log(java[4]);

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love ='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let lovenum = love.match(/love/gi)
console.log(lovenum.length);

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let sentence ="%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const new_sentence = sentence.replace(/[%$@&#]/gi, "");
console.log(new_sentence);

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up./' by John Holmes teaches us to help one another."
);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let income ='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
 let incomesum = (income.match(/\d+/g))
 let annualIncom =  Number(incomesum[0])
 let annualIncom1 =  Number(incomesum[1])
 let annualIncom2 =  Number(incomesum[2])
let total = annualIncom + annualIncom1 +annualIncom2
console.log(total);

