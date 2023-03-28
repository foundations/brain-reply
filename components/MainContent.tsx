import React, { useEffect, useRef } from 'react'
import WelcomeMain from '@/components/WelcomeMain'
import { connect } from 'react-redux'
import MessageBox, { MessageBoxAssistant } from "@/components/MessageBox"

import { messagesRoleType, messagesType, ChatssetType, ChatType } from '@/interface/index'
import { Dispatch, } from 'redux'
import { ActionUpdateAssistantMsg } from "@/redux/action/chat"
interface MainContentProps {
  chat: ChatType,
  chatsset: ChatssetType,
  onUpdateAssistantMsg: any
}
const MainContent = ({ chat, chatsset, onUpdateAssistantMsg }: MainContentProps) => {
  const { messages, isFetching } = chat
  let ref = useRef<HTMLDivElement>(null);
  const handleUpdateAssistantMsg = (idx: number, payload: any) => {
    onUpdateAssistantMsg({
      chatIdx: chatsset.selected,
      msgIdx: idx,
      payload
    })
  }
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", });
  }, [messages])
  return (
    <div className='maincontent'>
      <div className='pb-24 bg-white dark:bg-zinc-800 transition-all relative max-w-3xl mx-auto '>
        <div className='py-8'>
          <WelcomeMain />
          {messages.map((item, idx) => {
            let Msg = MessageBox[item.role]
            return <Msg idx={idx} item={item} key={idx} />

          })}
          {isFetching && <MessageBoxAssistant isFetching={true} idx={0} item={{ content: '', role: messagesRoleType.assistant }} />}
          <div ref={ref}></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const { chats, chatsset, newchat } = state
  const chat = chatsset.selected != null ? chats[chatsset.selected] : newchat
  // console.log(chat, chatsset.selected)
  return { chat: chat, chatsset }
}
const mapPropsToDispatch = (dispatch: Dispatch) => {
  return {
    onUpdateAssistantMsg: (payload: any) => {
      dispatch(ActionUpdateAssistantMsg(payload))
    }
  }
}
export default connect(mapStateToProps, mapPropsToDispatch)(MainContent)
