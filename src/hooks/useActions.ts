import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {cardActions} from "@/services";

const APP_ACTIONS = {
    ...cardActions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(APP_ACTIONS, dispatch)
}
