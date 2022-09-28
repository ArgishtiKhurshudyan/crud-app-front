import {handleActions} from 'redux-actions';


import {
  colorCreateFailure,
  colorCreateSuccess,
  colorStartCreate,
  colorDeleteStart,
  colorDeleteSuccess,
  colorDeleteFailure,
  colorUpdateStart,
  colorUpdateSuccess,
  colorUpdateFailure,
  getColorStart,
  getColorSuccess,
  getColorFailure,
} from "./actions"


const initialState = {
  isColorCreatedStart: false,
  isColorCreatedSuccess: false,
  isColorCreatedFailure: false,
  isColorDeleteStart: false,
  isColorDeleteSuccess: false,
  isColorDeleteFailure: false,
  isColorUpdateStart: false,
  isColorUpdateSuccess: false,
  isColorUpdateFailure: false,
  isColorGetStart: false,
  isColorGetSuccess: false,
  isColorGetFailure: false,
  colData: {},
  colorData: [],
  errorMessage: '',
}

const reducer = handleActions({
    [colorStartCreate]: (state) => ({
      ...state,
      isColorCreatedStart: true,
      isColorCreatedSuccess: false,
      isColorCreatedFailure: false,
    }),

    [colorCreateSuccess]: (state, {payload}) => {
     return {
      ...state,
          isColorCreatedStart: false,
          isColorCreatedSuccess: true,
          isColorCreatedFailure: false,
          colorData: [...state.colorData, payload.data]
      }
    },

    [colorCreateFailure]: (state, {payload}) => ({
      ...state,
      isColorCreatedStart: false,
      isColorCreatedSuccess: false,
      isColorCreatedFailure: true,
      errorMessage: payload.data

    }),
    [colorDeleteStart]: (state) => ({
      ...state,
      isColorDeleteStart: true,
      isColorDeleteSuccess: false,
      isColorDeleteFailure: false,
    }),

    [colorDeleteSuccess]: (state, {payload}) => {
      const colors = [...state.colorData]
      const newColors = colors.filter((color) => color.id !== payload)
      return {
        ...state,
        isColorDeleteStart: false,
        isColorDeleteSuccess: true,
        isColorDeleteFailure: false,
        colorData: newColors
      }
    },

    [colorDeleteFailure]: (state, {payload}) => ({
      ...state,
      isColorDeleteStart: false,
      isColorDeleteSuccess: false,
      isColorDeleteFailure: true,
      errorMessage: payload.data
    }),
    [colorUpdateStart]: (state) => ({
      ...state,
      isColorUpdateStart: true,
      isColorUpdateSuccess: false,
      isColorUpdateFailure: false,
    }),

    [colorUpdateSuccess]: (state, {payload}) => {
      const updated = [...state.colorData]
      const updatedIndex = state.colorData.findIndex((el) => el.id === payload.id)
      updated[updatedIndex] = {...updated[updatedIndex], ...payload}
      return {
        ...state,
        isColorUpdateStart: false,
        isColorUpdateSuccess: true,
        isColorUpdateFailure: false,
        colorData: updated
      }
    },

    [colorUpdateFailure]: (state, {payload}) => ({
      ...state,
      isColorUpdateStart: false,
      isColorUpdateSuccess: false,
      isColorUpdateFailure: true,
      errorMessage: payload.data
    }),
    [getColorStart]: (state) => ({
      ...state,
      isColorGetStart: true,
      isColorGetSuccess: false,
      isColorGetFailure: false,
    }),

    [getColorSuccess]: (state, {payload}) => ({
      ...state,
      isColorGetStart: false,
      isColorGetSuccess: true,
      isColorGetFailure: false,
      colorData: payload.data
    }),

    [getColorFailure]: (state, {payload}) => ({
      ...state,
      isColorGetStart: false,
      isColorGetSuccess: false,
      isColorGetFailure: true,
      errorMessage: payload.data
    }),
  },
  initialState
)

export default reducer;