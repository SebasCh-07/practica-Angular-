import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'ascci'
})
export class AscciPipe implements PipeTransform {
    transform(value: string) {
        return value.replaceAll("a"," 97 ").replaceAll("h"," 104 ").replaceAll("l"," 108 ").replaceAll("o"," 111 ")
    }
}