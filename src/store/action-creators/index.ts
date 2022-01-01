import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { TAction } from "../actions";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<TAction>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try {
            const { data } = await axios.get(`https://registry.npmjs.com/-/v1/search?text=${term}`);
            const repositories = data.objects.map((repo: any) => repo.package.name);

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: repositories
            })
        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}