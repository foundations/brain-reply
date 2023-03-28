import { AppProps } from '@/interface/index'
import { Action } from 'redux'
import typeenums from "@/redux/action/typeenums"

let initState: AppProps = {
  showOpenAISetApiKey: false,
  showPre: false,
}

let actionObj: any = {}

actionObj[typeenums.SHOWOPENAISETKEY] = (state: AppProps, action: any) => {
  return { ...state, showOpenAISetApiKey: action.payload }
}
actionObj[typeenums.SHOWPRE] = (state: AppProps, action: any) => {
  return { ...state, showPre: action.payload }
}

const chatsset = (state: AppProps = initState, action: Action) => {
  let proc = actionObj[action.type]
  let p = proc ? proc(state, action) : state
  return p
}
export default chatsset