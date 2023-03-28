import { ChatssetType } from '@/interface/index'
import { Action } from 'redux'
import typeenums from "@/redux/action/typeenums"


let initState: ChatssetType = {
  selected: null,
  openaiKey: null,
  licensekey: null
}

let actionObj: any = {}

actionObj[typeenums.CHANGE_CHAT] = (state: ChatssetType, action: any) => {
  return { ...state, selected: action.payload }
}
actionObj[typeenums.SET_OPENAI_KEY] = (state: ChatssetType, action: any) => {
  return { ...state, openaiKey: action.payload }
}
actionObj[typeenums.SET_LISENSE_KEY] = (state: ChatssetType, action: any) => {
  return { ...state, licensekey: action.payload }
}

const chatsset = (state: ChatssetType = initState, action: Action) => {
  let proc = actionObj[action.type]
  let p = proc ? proc(state, action) : state
  return p
}
export default chatsset