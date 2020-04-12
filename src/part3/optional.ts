/* Question 1 */
type Some<T> = {
    tag: 'Some',
    value: T
}
type None<T> ={
    tag: 'None'
}
export type Optional<T>= Some<T>|None<T>

export const makeSome : <T>(value:T)=>Optional<T> = <T>(insertValue:T):Optional<T> => ({tag:'Some',value:insertValue});
export const makeNone : <T>()=>Optional<T> = <T>():None<T>=>({tag:'None'});

export const isSome : <T>(o:Optional<T>) => o is Some<T> = <T>(o:Optional<T>): o is Some<T> => o.tag === 'Some';
export const isNone : <T>(o:Optional<T>) => o is None<T> = <T>(o:Optional<T>): o is None<T> => o.tag === 'None';

/* Question 2 */
export const bind : <T, U>(optional: Optional<T>, f: (x: T) => Optional<U>) => Optional<U> = 
<T,U> (optional: Optional<T>, f: (x: T) => Optional<U>):Optional<U> =>
(isSome(optional)) ? f(optional.value) : {tag:'None'};