import PropTypes from 'prop-types';

import closeButton from '../../public/assets/close_button.svg';
import { useState } from 'react';

const ShopPage = ({gold, setGold, resetGameMode, inventory, setInventory, setEquippedItem}) => {
    const [feedbackMessage, setFeedbackMessage] = useState(""); // Feedback for the user

    const resetMode = () => resetGameMode();

    const food = [
        {id: 1, name: 'Verde Vital', price: 50, className: 'food-1'},
        {id: 2, name: 'Algissimo', price: 50, className: 'food-2'},
        {id: 3, name: 'AlgaNutri', price: 50, className: 'food-3'}
    ];

  /*   const alge = [
        {id: 4, name: 'Alga Rebelă', price: 500, className: 'algae-1'},
        {id: 5, name: 'Alga Vital', price: 500, className: 'algae-2'},
        {id: 6, name: 'Alga Nutri', price: 500, className: 'algae-3'}
    ]; */

    // Handle the item purchase process
    const handleItemPurchase = (item) => {
        if (!inventory.some((i) => i.id === item.id))  {
            
            if (gold >= item.price) {
                // Deduct gold from the user's total
                setGold(gold - item.price);
                // Add the item to the inventory if not already bought
                setInventory([...inventory, item]);
                setEquippedItem(item);
                setFeedbackMessage(`Ai cumparat ${item.name}! 🎉`);
            } else {
                setFeedbackMessage(`Nu ai destui bani! 🪙`);
            }
            
            // Auto-equip the item
            
            // Optionally, clear feedback after a few seconds
            setTimeout(() => setFeedbackMessage(""), 3000);
        } else {
            setFeedbackMessage("Ai deja acest item!");
            setEquippedItem(item);
        }
    };

    return(
        <div className="game-wrapper">

            {/* Feedback Message */}
            {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}

            <div className="game-content-settings-education page">
                <img onClick={resetMode} className='close-button shop' src={closeButton} alt="X" />
                <div className="shop-food">
                    <h1 className="page-header">Alimente</h1>
                    <div className="carousel">
                        <div className="carousel-item" onClick={() => handleItemPurchase(food[0])}>
                            <div className={food[0].className}></div>
                            <div className="item-name">{food[0].name}</div>
                            <div className="item-price">{food[0].price} 🪙</div>
                        </div>
                        <div className="carousel-item" onClick={() => handleItemPurchase(food[1])}>
                        <div className={food[1].className}></div>
                            <div className="item-name">{food[1].name}</div>
                            <div className="item-price">{food[1].price} 🪙</div>
                        </div>
                        <div className="carousel-item" onClick={() => handleItemPurchase(food[2])}>
                        <div className={food[2].className}></div>
                            <div className="item-name">{food[2].name}</div>
                            <div className="item-price">{food[2].price} 🪙</div>
                        </div>
                    </div>
                </div>
                {/* <div className="shop-algae">
                    <h1 className="page-header">Alge</h1>
                    <div className="carousel">
                        <div className="carousel-item" onClick={() => handleItemPurchase(alge[0])}>
                            <img src="item1.jpg" alt="Item 1" />
                            <div className="item-name">{alge[0].name}</div>
                            <div className="item-price">{alge[0].price} 🪙</div>
                        </div>
                        <div className="carousel-item" onClick={() => handleItemPurchase(alge[1])}>
                            <img src="item2.jpg" alt="Item 2" />
                            <div className="item-name">{alge[1].name}</div>
                            <div className="item-price">{alge[1].price} 🪙</div>
                        </div>
                        <div className="carousel-item" onClick={() => handleItemPurchase(alge[2])}>
                            <img src="item3.jpg" alt="Item 3" />
                            <div className="item-name">{alge[2].name}</div>
                            <div className="item-price">{alge[2].price} 🪙</div>
                        </div>
                    </div>
                </div> */}
                <div className="upcoming-backgrounds">
                    <h1 className="page-header">Fundaluri</h1>
                    <h1 className="page-header" style={{color: "grey"}}>In curand</h1>
                </div>
            </div>
            <div className="sidebar shop">
                <button className="sidebar-button currency-button">
                    {gold}💰
                </button>
            </div>
        </div>
    )
}

export default ShopPage;

ShopPage.propTypes = {
    gold: PropTypes.number,
    setGold: PropTypes.func,
    resetGameMode: PropTypes.func,
    inventory: PropTypes.array,
    setInventory: PropTypes.func,
    equipedItem: PropTypes.object,
    setEquippedItem: PropTypes.func
}