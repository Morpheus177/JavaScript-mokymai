// Create three objects to store product data
var product1 = {
    name: 'Product A',
    price: 29.99,
    cost: 15.00,
    code: 'P001',
    quantityInStock: 100,
    shippingBox: { x: 10, y: 5, z: 8 }
  };
  
  var product2 = {
    name: 'Product B',
    price: 49.99,
    cost: 25.00,
    code: 'P002',
    quantityInStock: 50,
    shippingBox: { x: 12, y: 6, z: 10 }
  };
  
  var product3 = {
    name: 'Product C',
    price: 39.99,
    cost: 18.00,
    code: 'P003',
    quantityInStock: 75,
    shippingBox: { x: 8, y: 4, z: 6 }
  };
  
  // Output information for all three items
  console.log('Product Information:');
  console.log('Product 1:', product1);
  console.log('Product 2:', product2);
  console.log('Product 3:', product3);
  
  // Output the prices of all items in one line
  console.log('\nPrices of all items:');
  console.log('1st item costs - $' + product1.price + ', 2nd item costs - $' + product2.price + ', 3rd item costs - $' + product3.price);
  
  // Find and output which product is the most expensive
  var mostExpensiveProduct = [product1, product2, product3].reduce((max, product) => (product.price > max.price) ? product : max);
  console.log('\nThe most expensive product:');
  console.log(mostExpensiveProduct);
  
  // Output the volume of each item's box
  console.log('\nVolume of each item\'s box:');
  console.log('Product 1 volume:', product1.shippingBox.x * product1.shippingBox.y * product1.shippingBox.z);
  console.log('Product 2 volume:', product2.shippingBox.x * product2.shippingBox.y * product2.shippingBox.z);
  console.log('Product 3 volume:', product3.shippingBox.x * product3.shippingBox.y * product3.shippingBox.z);
  
  // Output the profitability of each item
  console.log('\nProfitability of each item:');
  console.log('Product 1 profitability:', (product1.price - product1.cost) * product1.quantityInStock);
  console.log('Product 2 profitability:', (product2.price - product2.cost) * product2.quantityInStock);
  console.log('Product 3 profitability:', (product3.price - product3.cost) * product3.quantityInStock);
  