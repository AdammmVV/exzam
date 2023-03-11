export type StatusType = 'default' | 'changed' | 'error'

export type CounterStateType= {
  startValue: number
  maxValue: number
  status: StatusType
}

const initial: CounterStateType  = {
  startValue: 0,
  maxValue: 5,
  status: 'default'
}

export const CounterReducer = (state: CounterStateType = initial, action: MainActionType): CounterStateType => {
  switch(action.type) {
    case 'CHANGE-MAX-INPUT-VALUE':
      return {
        ...state,
        maxValue: action.payload.maxValue,
        status: (action.payload.maxValue <= state.startValue || state.startValue < 0) ? 'error' : 'changed'
      }
    case 'CHANGE-MIN-INPUT-VALUE':
      return {
        ...state,
        startValue: action.payload.minValue,
        status: (state.maxValue <= action.payload.minValue || action.payload.minValue < 0) ? 'error' : 'changed'
      }
    case "CHANGE-STATUS":
        return {...state, status: action.payload.status}
  }
  return state
}

type MainActionType = ReturnType<typeof changeMaxInputValueAC>
    | ReturnType<typeof changeMinInputValueAC>
    | ReturnType<typeof changeStatusCounterAC>

export const changeMaxInputValueAC = (maxValue: number) => ({
  type: 'CHANGE-MAX-INPUT-VALUE',
  payload: {
    maxValue
  }
} as const)

export const changeMinInputValueAC = (minValue: number) => ({
  type: 'CHANGE-MIN-INPUT-VALUE',
  payload: {
    minValue
  }
} as const)

export const changeStatusCounterAC = (status: StatusType) => ({
  type: 'CHANGE-STATUS',
  payload: {
    status
  }
} as const)