import Style from "./ProjectListing.module.scss";
import Link from "next/link";
import NewProjectCard from "../utils/NewProjectCard";

// import Animate from "../Animate/Animate";
import useAnimation from "../../logic/useAnimation";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ProjectListing = ({ props }) => {
  const slideTopRef = useAnimation();
  return (

    <section className={Style.projects} >
      <div className="container">
        <div className={Style.projects_head}>
          <div className="row d-flex align-items-center">
            <div className="col-lg-12">
              <h1 className="h2 ttl-55" ref={slideTopRef}>
                My Projects
              </h1>
            </div>

          </div>
        </div>

        <div className={Style.projects_list}>
          <div className={Style.projects_list_wrap} >
            <Tabs
              defaultActiveKey="1"
              id="uncontrolled-tab-example"
              className=""
            >
              {props?.data?.tabs?.map((data,i)=>{
                return(
                  <Tab eventKey={i+1} title={data?.tab_name} key={i}>
                    <div className={Style.tab_area}>
                      <div className="row">
                      {data?.content?.map((content,i)=>{
                        
                        return(
                          <div className="col-lg-4" key={i}>
                            <NewProjectCard props={content} />
                          </div>
                        )
                      })}
                      </div>
                    
                   
                    </div>
                </Tab>
                )
              })}
           
            </Tabs>
          </div>

          <div className={`${Style.btn_wrap} fade_in d-flex justify-content-center`} ref={slideTopRef}>
            <button className="button button-outline-secondary ">
              <span>
                Load more
              </span>
            </button>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ProjectListing;
