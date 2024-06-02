function findProductDetails(storeData) {
    const {
      products: {
        
           
            laptop: { available: laptopAvailable, price: laptopPrice }
          
        },
        clothingSection: {
          inventory: {
            shirt: { available: shirtAvailable, price: shirtPrice }
          }
        }
      }
    } = storeData;
  
    return {
      laptopAvailable,
      shirtAvailable,
      laptopPrice,
      shirtPrice
    };
  
  
  const result = findProductDetails(storeData);
  console.log(result);