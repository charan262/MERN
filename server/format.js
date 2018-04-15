//Basic phone format  Eg: 1234567890 => (123)-456-7890
export const phoneFormat = (number) => {
    const cleanNum  = number.replace(/[^\d]/g, '');
    return  cleanNum.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')
}
phoneFormat ('1234567890');

//phone mask Eg: (123)-456-7890 => (***)-***-****
const maskPhone = (str) => {
    return str.replace(/[\d]/g,'*')
}
console.log(maskPhone('(123)-456-7890'))

//clean the input string Eg: '123abc#%&$*&%##@$&' => 123abc
const cleanString = (str) => {
    return  str.replace(/[^\w]/g, '')
   }
cleanString ('123abc#%&$*&%##@$&');

//thousand separator Eg: 1234567 => 1,234,567 || 0.123456 => 0.123456
const commaSeparate =(x) => {
    x = x.toString();
    while (/^[^.]*(\d+)(\d{3})/.test(x))
        x = x.replace(/(\d+)(\d{3})/, "$1,$2");
    return x;
}
commaSeparate(0.12334546)

//mask password Eg: abc123A@$ => *********
const maskPwd = (pwd) => {
        return str.replace(/[\w\s\t!@#$%^&*()/.,]/g, '*')
}
maskPwd('abc123')


