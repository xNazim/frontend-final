import { useSelector } from "react-redux";

export const Header = () => {
    const users = useSelector((state) => state.game.users);
    return <></>;
};
