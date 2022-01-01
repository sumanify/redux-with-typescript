import { ActionType } from "../action-types";
import { TAction } from "../actions";


interface IState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: IState = initialState, action: TAction): IState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {
                ...state,
                loading: true,
                error: null,
                data: []
            }
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            }
        default:
            return state;
    }
};

export default reducer;