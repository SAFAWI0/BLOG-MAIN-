import Sheet from "react-modal-sheet";
import { useAppStore } from "../store";
import { Container } from "../container/container";
import styles from "./sheetSave.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import { ButtCancelSave } from "../ButtSave/buttCancelSave";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const SheetSave = () => {
  const { isOpen, setOpen, cart } = useAppStore();

  return (
    <div>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content className={styles.scroll}>
            <div>
              <Container>
                <div className={styles.content}>
                  <h2>Save List</h2>
                  <IoIosCloseCircleOutline
                    className={styles.icon}
                    onClick={() => setOpen(false)}
                  />
                </div>
                <div className={styles.productsGrid}>
                  {cart.map((blog, i) => (
                    <div key={i} className={styles.card}>
                      <div className={styles.imag}>
                        <Image
                          alt="logo"
                          src={blog.product.photo_url}
                          fill={true}
                        />
                        <div className={styles.cardSave}>
                          <ButtCancelSave blog={blog.product} />
                        </div>
                      </div>
                      <p className={styles.title}>{blog.product.title}</p>
                      <p className={styles.supT}>{blog.product.category}</p>
                      <div className={styles.linspa}>
                        <Link
                          href={`/article/${blog.product.id}`}
                          onClick={() => setOpen(false)}
                        >
                          Read Article
                        </Link>
                        <span>
                          {dayjs(blog.updated_at).format("DD/MM/YYYY")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Container>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};
