import { useNavigate } from "react-router-dom";

const usePush = () => {
    const navigate = useNavigate();
    const push = (path, options = {}) => {
        navigate(path, options)
    }
    return push;
}

export default usePush;