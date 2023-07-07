import { useEffect } from "react";
import useAuthContext from "../../context/auth-context";

const HomePage = () => {
    const { user, getUser } = useAuthContext();

    useEffect(() => {
        if (!user) {
            getUser();
        }
    }, []);

    return (
        <>
            <div>
                {user?.name}
            </div>
        </>
    );
}
export default HomePage;