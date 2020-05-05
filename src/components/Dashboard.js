import React, { useState } from "react";
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import Cities from "../pages/Cities";
import WrappedNormalLoginForm from "../components/Addcity";
import WrappedNormalForm from "../components/AddRestaurant";
import { useHistory, NavLink } from "react-router-dom";
import "./form.css";
import Logo from "../images/image.png";

const { Header, Sider, Content, Footer } = Layout;

function Dashboard(props) {
  let history = useHistory();
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const toggleCity = () => {
    setShow(!show);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCityCancel = () => {
    setShow(false);
  };

  const handleCityOk = () => {
    setShow(false);
  };

  const handleLogout = () => {
    localStorage.clear(`token`);
    history.push(`/`);
  };
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: "10px", backgroundColor: "white" }}>
          <Avatar icon="user" style={{ float: "right" }} />
          <Title style={{ color: "white", marginLeft: "900px" }} level={3}>
            <NavLink to="/">
              <img src={Logo} alt="logo" className="logo" />
            </NavLink>
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "teal" }}>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>

              <Menu.Item key="home">
                <NavLink to="/" className="add-btn1">
                  <Icon type="home" />
                  <span>Home</span>
                </NavLink>
              </Menu.Item>
              <SubMenu
                className="add-btn"
                title={
                  <span>
                    <Icon type="info" /> <span>About us</span>
                  </span>
                }
              ></SubMenu>
              <SubMenu
                className="add-btn"
                title={
                  <span>
                    <Button onClick={toggleModal}>Add City</Button>
                  </span>
                }
              >
                <Modal
                  title="Add a City"
                  visible={visible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  destroyOnClose={true}
                  footer={null}
                >
                  <WrappedNormalLoginForm toggleModal={toggleModal} />
                </Modal>
              </SubMenu>
              <SubMenu
                className="add-btn"
                title={
                  <span>
                    <Button onClick={toggleCity}>Add Restaurant</Button>
                  </span>
                }
              >
                <Modal
                  title="Add a Restaurant"
                  visible={show}
                  onOk={handleCityOk}
                  onCancel={handleCityCancel}
                  destroyOnClose={true}
                  footer={null}
                >
                  <WrappedNormalForm toggleCity={toggleCity} />
                </Modal>
              </SubMenu>
              <SubMenu
                className="logout"
                title={
                  <span>
                    <Button type="danger" onClick={handleLogout}>
                      Log out
                    </Button>
                  </span>
                }
              ></SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>
                  <h1 className="city-header">Cities on your passport</h1>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div
                style={{
                  background: "#fff",
                  padding: 24,
                  minHeight: 580,
                  width: "100%",
                }}
              >
                <Cities />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              <p className="base">&copy;2020. Use RestaurantPassport. All right reserved</p>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
