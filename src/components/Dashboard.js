import React, { useState } from "react";
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button, Modal } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import Cities from "../pages/Cities";
import WrappedNormalLoginForm from "../components/Addcity";
import WrappedNormalForm from "../components/AddRestaurant";
import { useHistory } from "react-router-dom";
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
        <Header style={{ padding: "10px" }}>
          <Avatar icon="user" style={{ float: "right" }} />
          <Title style={{ color: "white", marginLeft: "900px" }} level={3}>
            {/* <img src={Logo} alt="logo" /> */}
            RestaurantPassport
          </Title>
        </Header>
        <Layout>
          <Sider style={{ background: "teal" }}>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" /> <span>About us</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="about us" title="Country 1">
                  <Menu.Item key="location1">Location 1</Menu.Item>
                  <Menu.Item key="location2">Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
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
                  <h1>Cities & Restaurants</h1>
                </Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>
                <Cities />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Cities</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
