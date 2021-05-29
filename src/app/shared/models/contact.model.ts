export interface Contact {  //(mediumChratacteristic)
    socialNetworkId: string;    //id
    contactName: string;
    city: string;
    contactType: string; //primary, secondary
    country: string;
    emailAddress: string;
    faxNumber?: string;
    phoneNumber: string;
    postCode: string;
    stateOrProvince: string;    //state or province
    street1: string;
    street2?: string;
    id: string;
    
    /* id: string;
    contactName: string;
    contactType: string;
    partyRoleType: string; //pl accountmanager type of role
    validFor: TimePeriod; */
}