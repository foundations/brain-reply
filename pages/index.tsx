import * as React from 'react';
import { connect } from 'react-redux';
import BottomEntry from '@/components/BottomEntry'
import Toolbar from '@mui/material/Toolbar';
import LeftDrawer from "@/components/LeftDrawer"
import TopHeader from "@/components/TopHeader"
import MainContent from "@/components/MainContent"
import { Dispatch } from 'redux'
import { ActionSetOpenAIkey, ActionShowOpenAIkey, ActionShowPre } from "@/redux/action/chat"
import DialogSetOpenApiKey from "@/components/DialogSetOpenApiKey"
import { AppProps } from '@/interface/index'
import Drawer from "@mui/material/Drawer"
import clsx from 'clsx';
import DialogPre from '@/components/DialogPre'
import { getLS } from '@/utils/viewhelper'
const drawerWidth = 320;

interface Props {
  app: AppProps,
  onSetOpenAiKey: (key: string) => void,
  onShowOpenAiKey: (show: boolean) => void
  onShowPre: (show: boolean) => void
  initRender: () => void
}

function FrontPage(props: Props) {
  const { onSetOpenAiKey, onShowOpenAiKey, app, onShowPre, initRender } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = (show: boolean) => {
    setMobileOpen(show);
  };
  React.useEffect(() => {
    initRender()
  }, [])

  const onCloseMobileOpen = () => setMobileOpen(false);
  return (
    <>
      <TopHeader onMobileopen={handleDrawerToggle} />
      <Drawer onClose={onCloseMobileOpen} variant="temporary" open={mobileOpen} classes={{ paper: 'w-72 bg-gray-800' }} className="sm:hidden">
        <LeftDrawer />
      </Drawer>
      <Drawer variant="permanent" open={true} classes={{ paper: 'w-72 bg-gray-800' }} className=" hidden sm:block z-30">
        <LeftDrawer />
      </Drawer>

      <div
        className='sm:pl-72'
      >
        <Toolbar />
        <MainContent />
        <BottomEntry />
      </div>
      <DialogSetOpenApiKey onShow={onShowOpenAiKey} show={app.showOpenAISetApiKey} onSetOpenAiKey={onSetOpenAiKey} />
      <DialogPre onShow={onShowPre} show={app.showPre} />
    </>
  );
}


const mapStateToProps = (state: any) => {
  return { app: state.app }
}
const mapPropsToDispatch = (dispatch: Dispatch) => {
  return {
    onSetOpenAiKey: (key: string) => {
      dispatch(ActionSetOpenAIkey(key))
    },
    onShowOpenAiKey: (show: boolean) => {
      dispatch(ActionShowOpenAIkey(show))
    },
    onShowPre: (show: boolean) => {
      dispatch(ActionShowPre(show))
    },
    initRender: () => {
      let openkey = getLS('openaikey')
      if (openkey) {
        dispatch(ActionSetOpenAIkey(openkey))
      }
    }
  }
}
export default connect(mapStateToProps, mapPropsToDispatch)(FrontPage)