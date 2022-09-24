import { useCart, cartQueryDocument, Cart } from "@jlnify/cart";
import { Button } from "ui";

export default function Web() {
  const cart = useCart();
  const foo = cartQueryDocument;

  return (
    <div>
      <h1>Web</h1>
      {cart}
      <Button />
      <Cart color="purple" />
    </div>
  );
}
