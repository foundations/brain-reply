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
import { TanSvg } from "@/components/Svgs"
import _trim from 'lodash/trim'
import { useSnackbar } from 'notistack';
import { ChatssetType } from '@/interface/index'
import { ActionSetOpenAIkey, ActionShowOpenAIkey } from "@/redux/action/chat"
import DialogSetOpenApiKey from "@/components/DialogSetOpenApiKey"

interface LeftDrawerBottomProps {

  chatsset: ChatssetType,
  onshowOpenAISetApiKey: (show: boolean) => void
}

const LeftDrawerBottom = (props: LeftDrawerBottomProps) => {
  const { chatsset, onshowOpenAISetApiKey
  } = props
  const { openaiKey } = chatsset
  // const { enqueueSnackbar } = useSnackbar();
  const [openSendBack, setOpenSendBack] = useState(false)
  const [AddKeysOpen, setAddKeysOpen] = useState(false)
  const handleCloseBack = () => {
    setOpenSendBack(false)
  }
  const handleOpenAddKey = () => {
    setAddKeysOpen(!AddKeysOpen)
  }

  const maskopenaiKey = openaiKey ? "*****" + openaiKey.substring(openaiKey.length - 3, openaiKey.length) : null
  return (
    <>
      <div className="py-2 absolute left-0 bottom-0 w-full px-2  text-white text-xs text-center bg-gray-700 font-bold">
        <div className="pb-2">
          <div className="flex items-center justify-center font-bold">
            <span className="mr-2">OpenAI API Key</span>
            {maskopenaiKey
              ? <Button className="py-1" onClick={() => onshowOpenAISetApiKey(true)}>
                <span className="text-xs font-bold">{maskopenaiKey}</span>
              </Button>
              : <Button className="py-1" onClick={() => onshowOpenAISetApiKey(true)}>
                <TanSvg />
                <span className="text-xs font-bold">未添加</span>
              </Button>
            }
          </div>
        </div>
        <p className="mt-2 text-gray-400">BrainReply.com © 2023</p>
        <div className="py-2 text-gray-400">
          <a className="text-xs" href="https://twitter.com/develop_atlas" target="_blank">Privacy/Terms</a>
          <a className="pl-1 text-xs" href="mailto:feedback@brainreply.com" target="_blank">提交反馈</a>
          <a className="pl-1 text-xs" href="https://twitter.com/develop_atlas" target="_blank">FAQs</a>
          <a className="pl-1 text-xs underline" href="https://twitter.com/develop_atlas" target="_blank">twitter</a>
        </div>
        {/* <div className="flex items-center justify-center ">
          <Button onClick={handleSend}>
            <span className="text-xs"></span>
          </Button>
        </div> */}
      </div>
      <Dialog
        open={openSendBack}
        onClose={handleCloseBack}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          提交反馈？
        </DialogTitle>
        <DialogContent>
          欢迎提供反馈、建议、功能请求和错误报告！
          <div className="my-4 text-center"><a href="mailto:feedback@brainreply.com" className="text-blue-600 hover:underline">feedback@brainreply.com</a></div>
        </DialogContent>
        <DialogActions>
          <MuiButton onClick={handleCloseBack}>
            关闭
          </MuiButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
const mapStateToProps = (state: any) => {
  let { chatsset } = state
  return { chatsset }
}
const mapPropsToDispatch = (dispatch: Dispatch) => {
  return {
    onSetOpenAiKey: (key: string) => {
      dispatch(ActionSetOpenAIkey(key))
    },
    onshowOpenAISetApiKey: (show: boolean) => {
      dispatch(ActionShowOpenAIkey(show))
    },
  }
}
export default connect(mapStateToProps, mapPropsToDispatch)(LeftDrawerBottom)
