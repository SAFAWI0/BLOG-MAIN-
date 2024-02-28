import { useAppStore } from "../store";
import styles from "./buttSave.module.css";
import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const ButtSave = ({ blog }) => {
  const { cart, setCart } = useAppStore();

  let isCenterInCart = cart.find((el) => el.product.id === blog.id);

  const handleChange = () => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((el) => el.product.id === blog.id);
    if (index !== -1) {
      updatedCart.splice(index, 1); // remove the center if it already exists
    } else {
      updatedCart.push({ product: blog }); // add the center if it doesn't exist
    }
    setCart(updatedCart); // update the cart state
  };

  return (
    <div className={styles.qtyBtn}>
      {isCenterInCart ? (
        <FaHeart onClick={handleChange} />
      ) : (
        <FaRegHeart onClick={handleChange} />
      )}
    </div>
  );
};

export default ButtSave;
