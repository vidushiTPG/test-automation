import { faker } from '@faker-js/faker';
import { UserAddress, PersonalDetails } from '../types/users';

export function generateEmail(): string {
  return `${faker.person.firstName().toLowerCase()}.${faker.person.lastName().toLowerCase()}_${Date.now()}@mail.com`;
};

export function generateAddress(): UserAddress {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: faker.location.country(),
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode('######'),
    mobileNumber: faker.phone.number({ style: 'national' }),
  };
};
export function personalDetails(): PersonalDetails {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: generateEmail(),
    password: faker.internet.password(),
    dateOfBirth: {
      day: faker.date.birthdate().getDate().toString(),
      month: faker.date.month(),
      year: faker.date.birthdate().getFullYear().toString()
    }
  };
};
export const validRandomCredentials = {
  name: 'TestUser',
  email: generateEmail(),
  password: 'Password123!'
};

export const invalidRandomCredentials = {
  name: '',
  email: 'wrong.email@example.com',
  password: 'short'
};
export const personalDetailsData = personalDetails();

export const userAddressData = generateAddress();