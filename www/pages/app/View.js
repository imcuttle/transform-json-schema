/**
 * @file View
 * @author Cuttle Cong
 * @date 2018/4/15
 * @description
 */
import { observable, computed } from 'react-mobx-vm'
import * as React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Subheader from 'material-ui/Subheader'
import IconButton from 'material-ui/IconButton'
import { List, ListItem } from 'material-ui/List'

import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import FileUploadDownload from 'material-ui/svg-icons/file/file-upload';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';


export default class View extends React.Component {
  @computed
  get Header() {
    return (
      <AppBar
        title={
          <div>
            {this.local.title}
            <small>
              <IconButton key="remote">
                <FileCloudDownload colore="white"/>
              </IconButton>
              <IconButton key="file">
                <FileUploadDownload color="white" />
              </IconButton>
            </small>
          </div>
        }
        onLeftIconButtonClick={() => {
          this.local.setValue('drawerOpen', !this.local.drawerOpen)
        }}
      >
        
      </AppBar>
    )
  }

  @computed
  get Drawer() {
    return (
      <Drawer open={this.local.drawerOpen}>
        <List>
          <ListItem
            nestedItems={[
              <ListItem key={1}>
                <Link>JSON to Schema</Link>
              </ListItem>
            ]}
          >
            Badges
          </ListItem>
          <ListItem>
            <Link>To View-Model</Link>
          </ListItem>
          <ListItem>
            <Link>To Walli Definition</Link>
          </ListItem>
        </List>
      </Drawer>
    )
  }

  onClickBody = () => {
    this.local.setValue('drawerOpen', false)
  }

  componentDidMount() {
    this.body.addEventListener('click', this.onClickBody)
  }
  componentWillUnmount() {
    this.body.removeEventListener('click', this.onClickBody)
  }

  render() {
    return (
      <div>
        {this.Drawer}
        <div ref={r => this.body = r}>
          {this.Header}
          {this.props.children}
        </div>
      </div>
    )
  }
}
