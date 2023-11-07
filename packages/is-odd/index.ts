import { isEven } from '@hossam1231/is-even';

export function isOdd(i: number): boolean {
    return isEven(i) === false;
}
