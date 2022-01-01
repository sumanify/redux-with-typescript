import { ActionType } from "../action-types";

interface ISearchRepositories {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface ISearchRepositoriesSuccess {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface ISearchRepositoriesError {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type TAction = ISearchRepositories | ISearchRepositoriesSuccess | ISearchRepositoriesError;
