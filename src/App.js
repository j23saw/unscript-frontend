import Drawer from "./components/Drawer";
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

function App() {
  return (
    <div className="App">
      <Drawer 
        title="Example"
        drawerItemTexts={["First", "Second"]}
        drawerItemIcons={[<MailIcon/>, <InboxIcon/>]}
        bottomItemText={"Bottom Text"}
        bottomItemIcon={<MailIcon/>}
      >
        {"Content goes here"}
      </Drawer>
    </div>
  );
}

export default App;
