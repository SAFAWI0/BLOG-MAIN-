import React from "react";
import { useAppStore } from "../store";
import styles from "./buttSave.module.css";
import { IoMdHeartDislike } from "react-icons/io";

export const ButtCancelSave = ({ blog }) => {
  const { cart, setCart } = useAppStore();

  const handleChange = () => {
    const updatedCart = cart.filter((item) => item.product.id !== blog.id);
    setCart(updatedCart);
  };
  return (
    <div className={styles.qtyBtn}>
      <IoMdHeartDislike data-tip="Delete" onClick={handleChange} />
    </div>
  );
};
