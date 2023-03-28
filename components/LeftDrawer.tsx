import React, { useState } from "react"
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FolderIcom from '@mui/icons-material/Folder';
import Divider from '@mui/material/Divider';
import Button from '@/components/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import MuiButton from '@mui/material/Button'
import ChatButton from "@/components/ChatButton"
import { messagesRoleType, messagesType, ChatssetType, ChatType } from '@/interface/index'
import LeftDrawerBottom from "@/components/LeftDrawerBottom"
import typeenums from "@/redux/action/typeenums"
import clsx from 'clsx'

interface LeftDrawerProps {
  // mobileOpen: boolean,
  chats: ChatType[],
  chatsset: ChatssetType,
  onNewChat: () => void
  onChangeChat: (idx: number) => void
}
const LeftDrawer = ({ chats, chatsset, onNewChat, onChangeChat }: LeftDrawerProps) => {

  return (
    <>

      <div className="py-2 absolute left-0 top-0 w-full px-2">
        <div className="mb-2 flex">
          <Button className="w-full mr-2" onClick={onNewChat}>
            <MessageIcon className="mr-2" />
            <span>新会话</span>
          </Button>
        </div>
      </div>
      <div className="" style={{ paddingTop: "60px", paddingBottom: "185px" }}>
        {chats.map((it, idx) => (<ChatButton idx={idx} onChangeChat={onChangeChat} selected={chatsset.selected === idx} item={it} key={idx} />))}
      </div>
      <LeftDrawerBottom />
    </>
  )
}
const mapStateToProps = (state: any) => {
  const { chats, chatsset } = state

  return { chats, chatsset }
}
const mapPropsToDispatch = (dispatch: Dispatch) => {
  return {
    onNewChat: () => {
      dispatch({ type: typeenums.CHANGE_CHAT, payload: null })
    },
    onChangeChat: (idx: number) => {
      dispatch({ type: typeenums.CHANGE_CHAT, payload: idx })
    }
  }
}
export default connect(mapStateToProps, mapPropsToDispatch)(LeftDrawer)