import Sheet from "react-modal-sheet";
import { useAppStore } from "../store";
import { Container } from "../container/container";
import styles from "./sheet.module.css";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

export const SheetPage = () => {
  const { isOpen, setOpen, cart, handleDelete } = useAppStore();

  return (
    <div>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content className={styles.scroll}>
            <div >
              <Container>
                <h2 className={styles.sheetH1}>Save List</h2>
                <br />
                <div className={styles.productsGrid}>
                  {cart.map((blog) => (
                    <div className={styles.card}>
                      <div className={styles.imag}>
                        <Image
                          alt="logo"
                          src={blog.product.photo_url}
                          fill={true}
                        />
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
              <div className={styles.cartAction}>
                <Container>
                  <button onClick={() => setOpen(false)}>Close</button>
                </Container>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};
