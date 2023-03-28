// import { Action } from "redux"
import typeenums from "./typeenums"

export const ActionInitChat = (payload: any) => {
  return {
    type: typeenums.INIT_CHAT,
    payload: payload
  }
}
export const ActionSendUserMessgae = (payload: any) => {
  return {
    type: typeenums.USER_SEND_MSG,
    payload: payload
  }
}
export const ActionpushNewChatMessgae = (payload: any) => {
  return {
    type: typeenums.PUSH_NEWCHAT_MSG,
    payload: payload
  }
}
export const ActionGetBrainReply = (payload: any) => {
  return {
    type: typeenums.GET_BRAIN_REPLY,
    payload: payload
  }
}
export const ActionUpdateAssistantMsg = (payload: any) => {
  return {
    type: typeenums.UPDATEASSISTANTMSG,
    payload: payload
  }
}
export const ActionSetOpenAIkey = (payload: any) => {
  return {
    type: typeenums.SET_OPENAI_KEY,
    payload: payload
  }
}
export const ActionShowOpenAIkey = (payload: any) => {
  return {
    type: typeenums.SHOWOPENAISETKEY,
    payload: payload
  }
}
export const ActionShowPre = (payload: any) => {
  return {
    type: typeenums.SHOWPRE,
    payload: payload
  }
}

