import { FormArray, FormControl, FormGroup } from "@angular/forms";
//import { getSettlementAccount } from "./settlement-account.form";
//import { getBillingAccount } from "./billing-account.form";
import { getPartyAccount } from "./party-account.form";
import { getIdentifyForm } from "./identify.form";

export function getAccountForm(): FormGroup {
    return new FormGroup({
        lastModified: new FormControl(),
        account: new FormArray([       
            getPartyAccount('name'),
            getPartyAccount('state')
        ]), 
        accountType: new FormControl(),
        id: new FormControl(),
        identify: new FormArray([
            getIdentifyForm('id'),
            getIdentifyForm('name')
        ])
    });
    
/*     new FormGroup({
    }),
    getSettlementAccount(),
    getBillingAccount(), */
    /*         financialAccount: new FormArray([
            new FormGroup({
                accountType: new FormControl(''),
                creditLimit: new FormControl(),
                description: new FormControl(''),
                href: new FormControl(''),
                id: new FormControl('uid'),
                lastModified: new FormControl(),
                name: new FormArray([]),
                state: new FormControl(''),
            })
        ]); */
}