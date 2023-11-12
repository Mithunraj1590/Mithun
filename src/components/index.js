import React from "react";
import AboutChooseMe from "./AboutChooseMe";
import AboutSkills from "./AboutSkills";
import AboutMilestones from "./AboutMilestones";
import AboutBanner from "./AboutBanner";
import HomeAbout from "./HomeAbout";
import HomeBanner from "./HomeBanner";
import HomeStories from "./HomeStories";
import HomeAllProjects from "./HomeAllProjects";
import ProjectListing from "./ProjectListing";



const Components = {
  HomeBanner,
  HomeAbout,
  HomeStories,
  HomeAllProjects,
  ProjectListing,

 AboutBanner,
 AboutMilestones,
 AboutSkills,
 AboutChooseMe,
};

const ComponentFunc = (block) => {
  if (typeof Components[block.slug] !== "undefined") {
    return React.createElement(Components[block.slug], {
      key: Math.random(),
      props: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.slug} has not been created yet.</div>,
    { key: Math.random() }
  );
};
export default ComponentFunc;
