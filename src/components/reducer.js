export const initialState = {
    basket: [
        {
        id:"19045609",
        title:"2020 Apple MacBook Pro with Intel Processor (13-inch, 16GB RAM, 1TB SSD Storage) - Space Gray",
        price:120.96,
        rating:5,
        image:"https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY218_.jpg"
    }]
};

export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=> item.price + amount, 0);


const reducer =(state, action) => {
    console.log(action)
    switch (action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket 
            return {
                ...state,
                basket: [...state.basket, action.item],
                 };
        case 'REMOVE_FROM_BASKET':
            //Logic to remove an item from basket 

            //this clones the basket 
            let newBasket = [...state.basket];

            //This checks to see if the product exists 
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            
            if (index >=0 ){
                //if item exists in basket, remove it...
                newBasket.splice(index,1);
            }else{
                console.warn(`cant remove product (id :${action.id}) as it's not in basket`)
            }
            // return the current state but change the basket to the new basket 
            return { ...state,
                basket:newBasket,
                 };
        default:
            return state;

    }
}

export default reducer;