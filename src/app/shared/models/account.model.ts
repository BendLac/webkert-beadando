export interface Account {
  type: string;
  accountType: string;
  creditLimit: number;
  description: string;
  href: string;
  id: string;
  lastModified: string;
  name: string[1];
  paymentStatus?: string;
  state: string;
  img?: string;
  more?: boolean;
}
