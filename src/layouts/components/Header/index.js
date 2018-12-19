import { connect } from 'dva'
import { Layout, Icon, Menu,  } from 'antd'
import Styles from './index.scss'
const { Header } = Layout
const { SubMenu } = Menu
// import Link from 'umi/link'

function Headers({ location, layout, dispatch }) {
  const { user, collapsed } = layout
  
  // change menu block
  const switchSider = () => dispatch({type: 'layout/changeCollapsed'})

  // logout or change password
  const handleClickMenu = ({ key }) => dispatch({type: `layout/${key}`})

  return (
    <Header style={{ background: '#fff', padding: 0, height: '56px' }}>
      <div className={Styles['header']}>
        <div className={Styles['button']} onClick={switchSider}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
          />
        </div>
        <div className={Styles['rightWarpper']}>
          <Menu mode="horizontal" onClick={handleClickMenu}>
            <SubMenu
              style={{
                float: 'right',
              }}
              title={<span>
                <Icon type="user" />
                {user && user.name || '未知'}
                </span>}
            >
                <Menu.Item key="changePwdModel">
                  <Icon type="edit" />
                  修改密码
                </Menu.Item>
                <Menu.Item key="logout">
                  <Icon type="logout" />
                  退出
                </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </div>
    </Header>
  )
}
export default connect(({layout}) => ({layout}))(Headers);