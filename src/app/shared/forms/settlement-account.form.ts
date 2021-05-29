import { FormArray, FormControl, FormGroup } from "@angular/forms";

export function getSettlementAccount(): FormGroup {
    return new FormGroup({
        accountType: new FormControl(''),
        creditLimit: new FormControl(),
        description: new FormControl(''),
        href: new FormControl(''),
        id: new FormControl(''),
        lastModified: new FormControl(),
        name: new FormArray([]),
        paymentStatus: new FormControl(''),
        state: new FormControl(''),
    }); 
}