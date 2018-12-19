import { connect } from "dva";
import { Layout, Menu, Icon} from 'antd';
import Link from 'umi/link';
import Styles from './index.scss'
const {  Sider } = Layout;
const { SubMenu } = Menu
const MenuConponent = ({ dispatch, layout }) => {
  const { collapsed, openKeys, menu, status } = layout
  
  const menuTree = (menu) => {
    return menu.map((item, index) => {
      if(item.child){
        return (
          <SubMenu key={'sub' + index} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
            {
              menuTree(item.child)
            }
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.key}>
          <Link to={item.url}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      )
    })
  }

  const menuItems = menuTree(menu)

  const onOpenChange = (key) => {
    const latestOpenKey = key.find(k => openKeys.indexOf(k) === -1);
    dispatch({type: 'layout/changeStatus', payload: { openKeys: [latestOpenKey] }})
  }

  return(
    <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className={Styles['logo']} style={{fontSize: '24px', color: '#fff', lineHeight: '56px'}}>
          {
            !collapsed ?
            <span>某某某</span>
            :
            <span>系统</span>
          }
        </div>
        <Menu theme="dark"
          mode="inline"
          openKeys={openKeys}
          selectedKeys={[status]}
          onOpenChange={(e)=>onOpenChange(e)}
        >
          { menuItems }
        </Menu>
      </Sider>
  )
}

export default connect(({layout}) => ({layout}))(MenuConponent)