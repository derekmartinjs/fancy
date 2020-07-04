// Declare Enums
export enum FixedOrVariable {
  FIXED = 'FIXED',
  VARIABLE = 'VARIABLE',
}

export enum AccountType {
  CREDIT_CARD = 'CREDIT_CARD',
  CHECKING_ACCOUNT = 'CHECKING_ACCOUNT',
  SAVINGS_ACCOUNT = 'SAVINGS_ACCOUNT',
  TRADING_ACCOUNT = 'TRADING_ACCOUNT',
  OTHER_ASSET = 'OTHER_ASSET',
}

export enum CategoryType {
  Business = 'Business',
  Clothing = 'Clothing',
  Education = 'Education',
  Entertainment = 'Entertainment',
  Equipment = 'Equipment',
  Food = 'Food/Dining',
  Freelance = 'Freelance',
  Gift = 'Gift/Donation',
  Housing = 'Business',
  Interest = 'Interest',
  Medical = 'Medical',
  Open = 'Open',
  Other = 'Other',
  Personal = 'Personal',
  Refund = 'Refund',
  Reimbursement = 'Reimbursement',
  Salary = 'Salary',
  Taxes = 'Taxes',
  Transfer = 'Transfer',
  Transportation = 'Transportation',
  Travel = 'Travel',
  Utility = 'Utility',
}

export enum UserType {
  ADMIN = 0,
  USER = 1,
  SUBSCRIBER = 2,
}

export enum Recurring {
  Yes = 1,
  No = 0,
}

// Declare interfaces
export interface Account {
  id: string;
  name: string;
  provider: string;
  type: AccountType;
}

export interface Budget {
  id: string;
  userId: string;
  month: Date;
  type: string;
  amount: number;
  recurring: Recurring;
}

export interface Category {
  code: string;
  category: CategoryType;
  name: string;
  type: FixedOrVariable;
}

export interface Offset {
  id: string;
  transactionId: string;
  vendor: Vendor;
  date: Date;
  amount: number;
}

export interface SharedExpense {
  firstUser: User;
  secondUser?: User | null;
  vendor: Vendor;
  transactionId: string;
  percentage: number;
  amount: number;
}

export interface Subscription {
  id: string;
  userId: string;
  vendor: Vendor;
  renewalDate: Date;
  recurring: Boolean;
}

export interface Transaction {
  id: string;
  userId: string;
  date: Date;
  description: string;
  type: string;
  amount: number;
  offsets?: Offset[];
  category: string;
}

export interface Vendor {
  id: string;
  name: string;
  expenseCategories: string[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  photoURL: string;
  type: UserType;
}
