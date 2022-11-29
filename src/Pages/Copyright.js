import {React, useRef, useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col
  } from "reactstrap";

function Copyright(props){

    const searchInput = useRef(null);
    const active = props.activepage;
    const back = props.handlePage;
    const language= useSelector((state) => state.language.value)
    const hymnNum= useSelector((state) => state.hymn.value);
    const dispatch = useDispatch();

    const [activeTab, setActiveTab] = useState("1");
    
    const thisCopy = props.lyrics.copyright[language];

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
      };

    const fontsize = useSelector((state) => state.fontsize.value)


    return <>
    
    {(active=="copyright"?
    <div className="page copyright">
        <div className="">

        <header>
            <div className="topHeader">

            <nav className="navbar col  navbar-light ">
                  <div className="container-fluid">
                      <div className='d-flex'>
                      <span className="navbar-brand">Number</span> 
                      </div>
                      <div className="d-flex actionItems">
                        <Button
                          className="btn btn-outline-secondary float-end" 
                          onClick={()=>back("home")}>
                            <FontAwesomeIcon icon={faArrowLeft} /> 
                        </Button>
                      </div>
                  </div>
              </nav>

            </div>
            <div className="bottomHeader">
            <Nav tabs className="copyrightNav nav-pills nav-fill">
                <NavItem>
                <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                    toggle("1");
                    }}
                >
                    {thisCopy.hymnal.title}
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                    toggle("2");
                    }}
                >
                    {thisCopy.ucg.title}
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                    toggle("3");
                    }}
                >
                    {thisCopy.copyright.title}
                </NavLink>
                </NavItem>
            </Nav>
            </div>
        
        </header>
        <div className={`pageContent font_${fontsize}`}>

        <div>
            
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                <Row>
                    <Col sm="12">
                    <div dangerouslySetInnerHTML={{__html:thisCopy.hymnal.content }}></div>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="2">
                <Row>
                    <Col sm="12">
                    <div dangerouslySetInnerHTML={{__html:thisCopy.ucg.content }}></div>
                    </Col>
                </Row>
                </TabPane>
                <TabPane tabId="3">
                <Row>
                    <Col sm="12">
                    <div dangerouslySetInnerHTML={{__html:thisCopy.copyright.content }}></div>
                    </Col>
                </Row>
                </TabPane>
            </TabContent>
            </div>

          
        </div>
        </div>

    </div>
     : <></>)}
    </>

}

export default Copyright;