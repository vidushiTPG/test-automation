import { faker } from '@faker-js/faker';
import { UserAddress } from '../types/users';

export function generateEmail(): string {
  return `testuser_${Date.now()}@mail.com`;
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

export const validRandomCredentials = {
  name: 'TestUser',
  email: generateEmail(),
  password: 'Password123!'
};


