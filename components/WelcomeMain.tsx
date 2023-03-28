import React, { } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Vip, GreenSvg, YaoShiSvg } from "@/components/Svgs"
import { ActionShowOpenAIkey, ActionShowPre } from "@/redux/action/chat"
import { messagesRoleType, messagesType, ChatssetType, ChatType } from '@/interface/index'
interface WelcomeMainProps {
  chatsset: ChatssetType
  onShowOpenAiKey: (show: boolean) => void
  onShowPre: (show: boolean) => void
}
const WelcomeMain = (props: WelcomeMainProps) => {

  return (
    <div className="p-6 sm:p-10 flex items-center justify-center">
      <div>
        <a className="flex items-center justify-center space-x-2" href='https://brainreply.com/'>
          <img src="https://pic.imgdb.cn/item/64115338ebf10e5d53b24e02.png" alt="Brain Reply" className="rounded-lg w-12 h-12" />
          <div className="font-semibold text-4xl sm:text-5xl text-black dark:text-white ">
            Brain<span className="text-blue-500">Reply</span>
          </div>
          <span className="bg-gradient-to-r from-green-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white text-center rounded-full inline-block ">
            GPT-4 支持!
          </span>
        </a>
        <div className="text-center my-4 font-light text-base sm:text-xl my-4 sm:my-6 text-black dark:text-white">
          更优雅的ChatGPT客户端
        </div>
      </div>
    </div>

  )
}
const mapStateToProps = (state: any) => {
  const { chats, chatsset, newchat } = state

  return { chats, chatsset, newchat }
}
const mapPropsToDispatch = (dispatch: Dispatch) => {
  return {
    onShowOpenAiKey: (show: boolean) => {
      dispatch(ActionShowOpenAIkey(show))
    },
    onShowPre: (show: boolean) => {
      dispatch(ActionShowPre(show))
    }
  }
}
export default connect(mapStateToProps, mapPropsToDispatch)(WelcomeMain)
