export const checkValidData = (email, password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordVBalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return ('Invalid email address');
    if (!isPasswordVBalid) return 'password must contain at least 8 characters, including uppercase, lowercase letters and numbers';

    return null;

}