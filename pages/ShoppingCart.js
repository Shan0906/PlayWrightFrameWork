export class ShoppingCart
{
constructor(page)
{
    this.page=page;
    this.dataTable=page.locator("#content form table");
}

 getCartProductRow(productname)
{
    return this.dataTable.locator('tbody tr').filter({hasText:productname});
}

 getCartProductQuantity(productname)
{
    return this.getCartProductRow(productname).locator('input[name^="quantity"]');
}

}