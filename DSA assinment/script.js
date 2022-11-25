// Q1.write a program to find all pairs of an integer array whose sum is equal to a given number ?
function calculate (array,sum){
  let result ={},return_result =[];
  for(let i=0;i<array.length;i++){
    if(result[array[i]]){
      return_result.push({[result[array[i]]]:array[i]})
    }else{
      result[sum-array[i]]=array[i]
    }
  }
  return return_result;
}
console.log(calculate([2,3,4,5,6,7,8],8));


// Q2. write a program to reverse an array in place?
let array = [1,2,3,4,5];
let reversedArray = array.reverse();
console.log('Ans',reversedArray);


// Q3. write a program to check if two strings are a rotation of each other?
function areRotationEq(string1,string2){
    for(let i=0;i<string1.length;i++){
        string1=string1[string1.length-1]+string1.substring(0,string1.length-1)
        if(string1 === string2){
            return true;
        }
    }
return false;
}
console.log(areRotationEq('123456','561234'));

// Q4. write a program to print the first non-repeted character from string?
 const firstNonRepetedChar =(str) =>{
    let obj ={};
    for(let item of str){
        if(obj[item]){
            obj[item]++;
        }else{
            obj[item]=1;
        }
        }
        console.log(obj);
        for(let item in obj){
            if(obj[item]===1){
                return str.indexOf(item);
            }
        }
        return -1;
    }

Input1 = 'edyoda';
console.log(firstNonRepetedChar(Input1));

// Q5. read about the tower of honoi algorithem write a program to impliment it.
function towerOfHonoi(n,from,to,wing){
    if (n===1){
        console.log (`movedisk1 from ${from} to ${to}`)
        return
    }
    towerOfHonoi(n-1,from,wing,to)
    console.log(`movedisk ${n} from ${from} to ${to}`)
    towerOfHonoi(n-1,wing,to,from)
}
towerOfHonoi(3,'A','B','C')
// Q6. write a program to convert postfix to prefix expresion
function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
    function conversion(ex)
    {
        let s = [];
        let length = ex.length;
        for (let i = 0; i < length; i++) {
            if (isOperator(ex[i])) {
  
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
                let temp = ex[i] + op2 + op1;
                s.push(temp);
            }
            else {
                s.push(ex[i] + "");
            }
        }
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    } 
    let ex = "ABC/-AK/L-*";
    console.log("Prefix : " + conversion(ex));
// Q7. write a program to convert prefix expression to infix expression

function isOperator(x)
{
    switch(x)
    {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}
function convert(str)
{
    let stack = [];
    let l = str.length;
    for(let i = l - 1; i >= 0; i--)
    {
        let c = str[i];

        if (isOperator(c))
        {
            let op1 = stack[stack.length - 1];
            stack.pop()
            let op2 = stack[stack.length - 1];
            stack.pop()
            let temp = "(" + op1 + c + op2 + ")";
            stack.push(temp);
        }
        else
        {
            stack.push(c + "");
        }
    }
    return stack[stack.length - 1];
}
 
let exp = "*-A/BC-/AKL";
  
console.log("Infix : " + convert(exp));
 
// Q8.write a program to check if all the brackets are closed in a given code snippet

function areBracketsBalanced(expr)
{
    let stack = [];
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}
 
let expr = "([{}])";
if (areBracketsBalanced(expr))
    console.log("Balanced ");
else
    document.write("Not Balanced ");
// Q9.write a program to reverse the stack
let st = [];
function insert_at_bottom(x)
{
    if(st.length==0)
        st.push(x);
    else
    {
            let a = st.pop();
            insert_at_bottom(x);
            st.push(a);
    }  
}
function reverse()
{
    if(st.length > 0)
        {
            let x = st.pop();
            reverse();
            insert_at_bottom(x);
        }
}
st.push('planted');
st.push('is');
st.push('tree');
st.push('flower');
document.write("Original Stack<br>");
document.write(st.join(" ")+"<br>");
reverse();
document.write("Reversed Stack<br>");
document.write(st.join(" "));


// Q10.write a program to find the smallest number using stack
let arr = [31, 23, 25, 19, 21, 54];
let n = arr.length;
arr.sort();
document.write("smallest element is "+arr[0],"</br>");
 
 