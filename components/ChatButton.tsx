import React from "react";
import SMSIcon from "@mui/icons-material/Sms"
import Avatar from "@mui/material/Avatar"
import { messagesRoleType, messagesType, ChatssetType, ChatType } from '@/interface/index'
import cls from "clsx"
import LoadingDots from "./LoadingDots"
interface ChatButtonProps {
  idx: number,
  item: ChatType,
  selected: boolean
  onChangeChat: (idx: number) => void
}

const ChatButton = ({ item, selected, onChangeChat, idx }: ChatButtonProps) => {
  const { title, messages, isFetching } = item
  const desc = messages[messages.length - 1].content
  // const isFetching = messages[messages.length - 1]?.isFetching
  const handleChange = () => {
    onChangeChat(idx)
  }
  return (
    <div
      onClick={handleChange}
      role="button"
      tabIndex={0}
      aria-disabled="false"
      aria-roledescription="draggable"
      aria-describedby="DndDescribedBy-0"
    >
      <div className="select-none lg:select-auto touch-manipulation">
        <div className={cls({ 'bg-gray-900': selected }, "text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center text-sm font-medium w-full  justify-between overflow-hidden px-2 py-2")}>
          <Avatar className="w-10 h-10 rounded-md mr-2" variant="square">
            <SMSIcon />
          </Avatar>
          <div className="min-w-0 pr-18 text-left w-full">
            <div className="text-gray-100 truncate w-full">{title}</div>
            {isFetching
              ? <div className="text-xs text-gray-400 font-normal truncate  w-full mt-1">输入中 <LoadingDots color="white" style="large" /></div>
              : <div className="text-xs text-gray-400 font-normal truncate  w-full">
                {desc}
              </div>
            }
          </div>
        </div>
      </div>
    </div>

  )
}
export default ChatButton