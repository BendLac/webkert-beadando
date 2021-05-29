import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function getIdentifyForm(idHref: string): FormGroup {
    return new FormGroup({
        id: new FormControl(),
        href: new FormControl(idHref),
        name: new FormArray([]),
    }); 
}