export interface UserAddress {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
}

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
}