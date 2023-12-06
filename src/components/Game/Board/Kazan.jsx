import styles from "./Board.module.scss";
import Spot from "./Spot";

const Kazan = (props) => {
    return (
        <div className={styles.kazan}>
            <div className={styles.kazan__counter}>{props.count}</div>
            <div className={styles.kazan__list}>
                {Array.from(Array(props.count), (e, i) => {
                    return <Spot key={i} />;
                })}
            </div>
        </div>
    );
};

export default Kazan;
