import { Category } from "../models/category.model";

export const CATEGORIES: Category[] = [
    {
        title: 'Fiókok',
        icon: 'person',
        value: 'account',
        color: 'teal',
        url: '/home/accounts'
    },
    {
        title: 'Kontaktok',
        icon: 'list',
        value: 'contact',
        color: 'teal',
        url: '/home/contacts'
    },
    {
        title: 'list',
        icon: 'list',
        value: 'list',
        color: 'cyan',
        url: '/home/list'
    }
];
