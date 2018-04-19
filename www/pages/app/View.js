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
import { List, ListItem } from 'material-ui/List'

export default class View extends React.Component {
  @computed
  get Header() {
    return (
      <AppBar
        title="Title"
        onLeftIconButtonClick={() => {
          this.local.setValue('drawerOpen', !this.local.drawerOpen)
        }}
      />
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
