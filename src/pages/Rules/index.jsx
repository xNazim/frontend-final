import styles from "./Rules.module.scss";
import img2 from "images/2.jpg";
import img1 from "images/1.jpg";
import img3 from "images/3.jpg";

const Block = ({ title, texts, img, capture }) => {
    return (
        <div className={styles.rules__block}>
            {!!title && (
                <div className={styles.rules__header}>
                    <h4 className={styles.rules__title}>{title}</h4>
                </div>
            )}
            <div className={styles.rules__content}>
                {texts.map((text, index) => {
                    return <p key={index + text}>{text}</p>;
                })}
                {img && (
                    <>
                        <p className={styles.rules__img}>
                            <img width="570" height="322" alt="" src={img} />
                        </p>
                        {!!capture && (
                            <p className={styles.rules__img}>
                                <em>{capture}</em>
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export const Rules = () => {
    const blocks = [
        {
            title: "Board",
            texts: [
                "Toguz Korgool is played on a special board having two rows of 9 small pits and two big pits called Kazans. The player's side is the bottom row of the small pits and the player's kazan is the top one (close to the opponent's side).",
                "At the beginning of the game 9 seeds are placed in each small pit.",
            ],
            img: img2,
        },
        {
            title: "Objective",
            texts: [
                "A player wins a game if he accumulates more seeds in his own kazan than the opponent.",
                "If both players have accumulated the same number of seeds, the game ends by a draw.",
            ],
        },
        {
            title: "Play",
            texts: [
                "Players take turns sowing their seeds. The sowing is performed in the following way:",
                "The player picks all seeds up from one of the pits on his side.",
                "If the chosen pit contained more than one seed then the first picked up seed is dropped back to the starting pit. Then the player continues dropping the taken seeds in counter-clockwise direction, one seed in a pit.",
                "If the chosen pit contained only one seed then the player drops it in the next pit in counter-clockwise direction.",
                "Below is an example of sowing:",
            ],
            img: img1,
            capture:
                'A player takes nine seeds from his pit "g" and sows them counter-clockwise. Note that the first seed falls back to the pit "g".',
        },
        {
            texts: [
                "If the last sown seed  lands in a pit on the opponent's side and brings the total number of seeds in the pit to the even number then all seeds from the pit are captured by the player and are moved to the player's kazan.",
            ],
            img: img3,
            capture:
                "The last sown seed lands in a pit on the opponent's side and brings the total number of seeds in the pit to the even number (10). All these 10 seeds are moved to the player's kazan.",
        },
        {
            texts: [
                'If the last sown seed  lands in a pit on the opponent\'s side and brings the total number of seeds in the pit to three then all seeds from the pit are captured by the player and are moved to the player\'s kazan and the pit turns into the player\'s tuzdik ("sacred place" in Kazakh; or tuz in Kyrgyz, which means "salt"). There are several cases when tuzdik is not created:',
                "It is permitted to make such a move, but it wouldn't create a tuzdik. All the seeds that fall into a tuzdik during sowing are captured by the tuzdik's owner and are moved to his kazan.",
            ],
        },
    ];
    return (
        <div className={styles.rules}>
            {blocks.map((block, index) => {
                return <Block key={index + block.title} {...block}></Block>;
            })}
        </div>
    );
};
