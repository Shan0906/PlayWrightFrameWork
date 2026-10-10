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
    return faker.internet.email();
}
static getrandomPhone()
{
    return faker.phone.getrandomPhone();
}
static getrandomPassword()
{
    return faker.person.getrandomPassword();

}
}