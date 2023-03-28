export enum aimodeKeys {
  "GPT35TURBO" = 'GPT35TURBO'
}
export enum messagesRoleType {
  system = 'system',
  user = 'user',
  assistant = 'assistant'
}
export interface messagesType {
  role: messagesRoleType.system | messagesRoleType.user | messagesRoleType.assistant
  content: string,
  isFetching?: boolean,
  c_at?: string
  chat?: ChatType
  // finish: 
}

export interface assistantStartMessagesType {
  role: messagesRoleType.assistant
  c_at?: string
  // finish: 
}



export interface ChatType {
  id?: string
  title: string,
  isFetching: boolean,
  aimodeKey: aimodeKeys.GPT35TURBO,
  messages: messagesType[]
}
export interface ChatssetType {
  selected: null | number
  openaiKey: null | string
  licensekey: null | string
}
export interface MessageBoxProps {
  item: messagesType,
  // chat: ChatType,
  idx: number
}

export interface AppProps {
  showOpenAISetApiKey: boolean
  showPre: false
}