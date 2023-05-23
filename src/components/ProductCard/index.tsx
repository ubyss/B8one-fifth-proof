import React, { useState } from "react";

import { ProductCardProps, ProductListProps, Product } from "../../interfaces/IOrderform";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  listPrice,
  price,
  shipping,
  name,
  setProducts,
  products,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("retirada");

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };
  
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const removeProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const total = quantity * Number(listPrice);

  return (
    <div className="ProductCard">
      <div className="ProductCard__Top">
        <span>Produto</span>
        <span>Valor unitário</span>
        <span>Quantidade</span>
      </div>
      <div className="ProductCard__product-info">
        <div className="ProductCard__product-info__container">
        <img src={image} alt="" />
        <div className="ProductCard__product-info__texts">
          <p>{name || "Refrigerador Electrolux Inverter Inox 590L IM8S"}</p>
          <span>
            Disponível em <strong>CD São Paulo</strong>
          </span>
        </div>
        </div>
        <div className="ProductCard__product-info__price">
          <span>R$ {listPrice}</span>
          <span>R$ {price}</span>
        </div>
        <select onChange={handleQuantityChange}>
          {[...Array(10).keys()].map((value) => (
            <option key={value} value={value + 1}>
              {value + 1}
            </option>
          ))}
        </select>
        <i className="delete" onClick={() => removeProduct(id)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167"
              stroke="#262626"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </div>
      <div className="ProductCard__product-info__warranty">
        <button>Adicionar Garantia Estendida</button>
        <span>Ver mais opções</span>
      </div>

      <div className="ProductCard__product-info__delivery">
        <span>Forma de entrega</span>
        <div className="container">
        <label className={selectedOption === 'retirada' ? 'selected' : ''}>
          <input
            type="radio"
            value="retirada"
            checked={selectedOption === "retirada"}
            onChange={handleOptionChange}
          />
          <div>
          <span>Retirada</span>
          <span>Disponível em estoque</span>
          </div>
          
        </label>
        { shipping.pickup && (
        <label className={selectedOption === 'entrega' ? 'selected' : ''}>
          <input
            type="radio"
            value="entrega"
            checked={selectedOption === "entrega"}
            onChange={handleOptionChange}
          />
        <div>
          <span>Entrega</span>
          <span>Receba até {shipping?.delivery?.days} úteis</span>
          </div>
          <p>+ R$ {shipping?.delivery?.value}</p>
        </label>
        )}
        </div>
      </div>
      <div className="total">
        <span>Total</span>
        <strong>R$ {total},00</strong>
      </div>
    </div>
  );
};

export default ProductCard;
