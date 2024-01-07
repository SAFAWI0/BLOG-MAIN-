import { useAppStore } from "../store";
import styles from "./qtyBtn.module.css";

const QtyBtn = ({ blog }) => {
  const { cart, setCart } = useAppStore();

  let qt = cart.find((el) => el.product.id === blog.id)?.qt || 0;

  const handleChange = (newQt) => {
    // check if qt === 0 then we should remove it from cart
    if (newQt === 0) {
      setCart(cart.filter((el) => el.product.id !== blog.id));
    } else {
      // create item object for the cart
      let newItem = {
        product: blog,
        qt: newQt,
      };

      // find index of the item in cart if no exist it will return -1 and we should add new obj in the cart
      let index = cart.findIndex((el) => el?.product?.id === blog?.id);
      if (index === -1) {
        // add new obj in the cart if it no exist
        setCart([...cart, newItem]);
      }
    }
  };
  return (
    <div className={styles.qtyBtn}>
      {qt === 0 ? (
        <button className={styles.addBtn} onClick={() => handleChange(1)}>
          SAVE
        </button>
      ) : (
        <button className={styles.addBtn} onClick={() => handleChange(qt - 1)}>
          Cabcel
        </button>
      )}
    </div>
  );
};

export default QtyBtn;
