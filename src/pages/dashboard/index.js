import { connect } from 'dva'
import { Icon, Row, Col, Card} from 'antd';
import Breadcrumbs from '@/layouts/components/Breakcrumbs'
const { Meta } = Card;

const DashboardGroup = [
  {
    name: "标题1",
    icon: "team",
    key: "totalLeads",
    color: "rgb(216, 151, 235)"
  },
  {
    name: "标题2",
    icon: "rise",
    key: "dailyLeads",
    color: "rgb(246, 152, 153)"
  },
  {
    name: "标题3",
    icon: "user",
    key: "myLeads",
    color: "rgb(143, 201, 251)"
  },
  {
    name: `标题4`,
    icon: "pay-circle-o",
    key: "balance",
    color: "rgb(100, 234, 145)",
}]


const Dashboard = ({
  dispatch,
  loading,
  dashboard
}) => {

  const { data } = dashboard

  return (
    <div>
      <Breadcrumbs/>
      <Row gutter={16} style={{marginBottom: '16px'}}>
        {
          DashboardGroup.map(item =>
            <Col className="gutter-row" span={6} key={item.key}>
              <Card>
                <Meta
                  style={{height:70}}
                  avatar={<Icon type={item.icon} style={{fontSize: '54px', color: item.color}}/>}
                  title={item.name}
                  description={<span>{data[item.key]}</span>}
                />
              </Card>
            </Col>
          )
        }
      </Row>
    </div>
  )
}


export default connect(({dashboard})=>({dashboard}))(Dashboard)

