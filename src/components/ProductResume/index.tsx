import React from "react";
import { Products } from "../../interfaces/IOrderform";

const ProductResume: React.FC<Products> = ({ products }) => {
  console.log(products, "rems");

  const totalValue = products.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );
  console.log(`O valor total dos produtos é: ${totalValue.toFixed(2)}`);

  const totalDiscount = products.reduce(
    (total, product) =>
      total + (parseFloat(product.listPrice) - parseFloat(product.price)),
    0
  );
  console.log(`O desconto total é: ${totalDiscount.toFixed(2)}`);

  const totalDelivery = products.reduce(
    (total, product) =>
      product.shipping.delivery
        ? total + parseFloat(product.shipping.delivery.value)
        : total,
    0
  );
  console.log(`O valor total do delivery é: ${totalDelivery.toFixed(2)}`);

  const Total = totalDelivery + totalDiscount + totalValue;

  return (
    <div className="CheckoutResume">
      <div className="subtotal">
        <span>subtotal</span>
        <span>R$ {totalValue},00</span>
      </div>
      <div className="discount">
        <span>desconto</span>
        <span className="discount-text">- R$ {totalDiscount},00</span>
      </div>
      <div className="delivery">
        <span>Entrega</span>
        <span>R$ {totalDelivery},00</span>
      </div>
      <hr />
      <div className="total">
        <span>Total</span>
        <span>R$ {Total},00</span>
      </div>
      <button>Ir para o pagamento</button>
    </div>
  );
};

export default ProductResume;
