function storeAnalysis(store) {
    

    store.forEach(product => {
      console.log(`Name: ${product.name}, Rating: ${product.rating}`);
    })
    const totalRating = store.reduce((sum, product) => sum + product.rating, 0);

    

    console.log(`Average Rating: ${averageRating.toFixed(2)}`);
  
    
    const minPriceProduct = store.reduce((minProduct, product) =>

      product.price < minProduct.price ? product : minProduct, store[0]);
   
  }

  console.log(`Product with Minimum Price: ${minPriceProduct.name}`);