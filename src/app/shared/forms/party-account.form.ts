import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function getPartyAccount(use: string): FormGroup {
    return new FormGroup({
        use: new FormControl(use),
        name: new FormControl(),
        state: new FormControl()
/*         accountType: new FormControl(''),
        creditLimit: new FormControl(),
        description: new FormControl(''),
        href: new FormControl(''),
        id: new FormControl(''),
        lastModified: new FormControl(),
        name: new FormArray([]),
        paymentStatus: new FormControl(''),
        state: new FormControl(''), */
    }); 
}