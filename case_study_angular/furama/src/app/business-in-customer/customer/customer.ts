export interface Customer {
  customerId: number;
  customerCode: string;
  customerName: string;
  customerBirthday: string;
  customerGender: number;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string;
  customerType: {
    customerTypeId: number;
    customerTypeName: string;
  };
  status: 0;
}
