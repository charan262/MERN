//Phone number validation, Eg: accept only 10 numerics from a text input field
export const phoneValidate = (number) => {
    const cleanNum = number.replace(/[^\w]/g, '')
    const pattern  = /^[0-9\b]+$/;
    if(cleanNum.length<=10){
        return cleanNum === '' || pattern.test(cleanNum) ;
    }

}

// Email validation for minimum requirements otherwise returns false
export const emailValidate = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Password validation for minimum requirements Eg: min 8 chars, atleast a lowercase, uppercase, special char
export const passwordValidate = (pwd) => {
    let re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
    return re.test(pwd);
}
