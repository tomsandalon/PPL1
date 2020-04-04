/* Question 1 */

export type Optional<T>= {
    tag: 'Some';
    value: T
}|{
    tag: 'None';
}

export const makeSome : <T>(value:T)=>Optional<T> = <T>(insertValue:T) => {
    return {tag:'Some',value:insertValue};
};
export const makeNone : <T>()=>Optional<T> = <T>()=>{
    return {tag:'None'};
};

export const isSome : <T>(o:Optional<T>) => boolean = <T>(o:Optional<T>) => o.tag === 'Some';
export const isNone : <T>(o:Optional<T>) => boolean = <T>(o:Optional<T>) => o.tag === 'None';

/* Question 2 */
export const bind : <T, U>(optional: Optional<T>, f: (x: T) => Optional<U>) => Optional<U> = 
<T,U> (optional: Optional<T>, f: (x: T) => Optional<U>) =>
(optional.tag === 'Some') ? f(optional.value) : {tag:'None'};