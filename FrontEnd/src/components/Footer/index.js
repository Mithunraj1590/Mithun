import Link from "next/link";
import React from "react";
import Style from "./Footer.module.scss"
import Icons from "@/styles/Icons";

const Footer = () => {
  return (
    <footer className="bg-white w-full  flex justify-center items-center pb-[30px] xl:pb-[50px] py-[50px]">
      <div>
        <div>
          <div>
            <div className="container">
              <div className="mb-[50px] md:mb-[70px] xl:mb-[100px] flex justify-between flex-wrap">
                <div className="w-full md:max-w-[60%] lg xxl:max-w-[38%] order-2 md:order-1">
                <h2 className="ttl max-w-[60%]  md:max-w-max text-[40px] md:text-[80px] lg:text-[115px] xl:text-h2 leading-[1] font-medium mb-4 md:mb-6 xl:mb-8">CONNECT & COLLAB</h2>
                <p className="para text-[18px]">I&apos;m always open to new opportunities and connections. Whether you have a project you&apos;d like to discuss&#39; want to share your work&#39; or just say hi — please don&apos;t hesitate to reach out.</p>
                <Link href="" className="btn btn-primary btn-icon hover-translate max-w-max mt-[20px] md:mt-[35px] xl:mt-[40px]">
                  CONTACT
                  <span className="icon">
                    <Icons size={18} icon="aroow-top" />
                  </span>
                </Link>
                </div>
                <div className="order-1 md:order-2">
                  <Link href="">LOGO</Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-y-6 w-full text-center justify-between font-jet text-xs items-center">
                <Link href="/" className="mx-2 underline underline-offset-8 decoration-[1.5px]">LINKEDIN</Link>
                <Link href="/" className="mx-2 underline underline-offset-8 decoration-[1.5px]">FACEBOOK</Link>
                <Link href="/" className="mx-2 underline underline-offset-8 decoration-[1.5px]">INSTAGRAM</Link>
                <span className="font-xs block m-auto md:m-0">© 2024 MITHUN RAJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
