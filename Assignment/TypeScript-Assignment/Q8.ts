function displayProducts<T>(items: T[]): void {
    items.forEach(item => {
        console.log(item);
    });
}

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const productNames: string[] = ["Laptop", "Mobile", "Headphones"];
displayProducts(productNames);

const productPrices: number[] = [50000, 25000, 3000];
displayProducts(productPrices);

const productIDs: number[] = [101, 102, 103];
displayProducts(productIDs);

const firstProduct = getFirstElement(productNames);
console.log("First Product:", firstProduct);

const firstPrice = getFirstElement(productPrices);
console.log("First Price:", firstPrice);

const availability = [true, false, true];
const firstAvailability = getFirstElement(availability);
console.log("First Availability:", firstAvailability);