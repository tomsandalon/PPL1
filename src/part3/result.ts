/* Question 3 */

import { reduce } from "ramda";

export type Result<T> = {
    tag: 'Ok',
    value: T;
}|{
    tag: 'Failure',
    message: string
}

export const makeOk : <T>(newValue:T)=>Result<T> = <T> (newValue:T)=>({tag: 'Ok', value: newValue});
export const makeFailure : <T>(newMessage:string) => Result<T> = <T> (newMessage:string) => ({tag: 'Failure', message:newMessage});

export const isOk : <T>(r:Result<T>) => boolean = <T>(r:Result<T>) => r.tag === 'Ok';
export const isFailure : <T>(r:Result<T>) => boolean = <T>(r:Result<T>) => r.tag === 'Failure';

/* Question 4 */
export const bind : <T, U>(result:Result<T>, f:(x:T) => Result<U>) => Result<U> =
<T,U> (result: Result<T>, f:(x: T) => Result<U>):Result<U> =>
(result.tag === 'Ok') ? f(result.value) : {tag: 'Failure', message: result.message}

/* Question 5 */
interface User {
    name: string;
    email: string;
    handle: string;
}

const validateName = (user: User): Result<User> =>
    user.name.length === 0 ? makeFailure("Name cannot be empty") :
    user.name === "Bananas" ? makeFailure("Bananas is not a name") :
    makeOk(user);

const validateEmail = (user: User): Result<User> =>
    user.email.length === 0 ? makeFailure("Email cannot be empty") :
    user.email.endsWith("bananas.com") ? makeFailure("Domain bananas.com is not allowed") :
    makeOk(user);

const validateHandle = (user: User): Result<User> =>
    user.handle.length === 0 ? makeFailure("Handle cannot be empty") :
    user.handle.startsWith("@") ? makeFailure("This isn't Twitter") :
    makeOk(user);

export const naiveValidateUser : (user:User) => Result<User> = (user:User) => (!isOk(validateName(user))) ? validateName(user) : (!isOk(validateEmail(user))) ? validateEmail(user) : validateEmail(user);

export const monadicValidateUser : (user:User) => Result<User> =
    (user:User) => reduce(bind, makeOk(user), [validateName, validateEmail, validateHandle]);
    //(user:User) => bind(bind(bind(makeOk(user), validateEmail), validateName), validateHandle);