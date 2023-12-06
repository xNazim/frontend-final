import styles from "./Board.module.scss";
import Spot from "./Spot";

const Pit = ({ count, idx, onClick }) => {
    return (
        <div className={styles.pit} onClick={() => onClick(idx)}>
            {Array.from({ length: count }).map((_, ballIdx) => (
                <Spot key={ballIdx} />
            ))}
        </div>
    );
};

export default Pit;
