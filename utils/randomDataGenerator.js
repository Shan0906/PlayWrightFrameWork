import {faker} from "@faker-js/faker";
export class RandomDataGenrator
{
static getrandomfirstname()
{
    return faker.person.firstName();
}
static getrandomlastname()
{
    return faker.person.lastName();
}
static getrandomEmail()
{
    return `shantanu.${Date.now()}@example.com`
}
static getrandomPhone()
 { 
    return faker.string.numeric(10); 
 }
static getrandomPassword()
 { return `Test@${faker.string.alphanumeric(8)}1`; 
  }
}