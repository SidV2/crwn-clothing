import { CATEGORIES_ACTION_TYPES } from './category.types';
import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = () => createAction(
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  categoriesArray
);

export const fetchCategoriesFailed = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesandDocuments('categories');
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch(error) {
    dispatch(fetchCategoriesFailed(error));
  }
}
