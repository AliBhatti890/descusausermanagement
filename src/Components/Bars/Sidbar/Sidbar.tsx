import {  useState } from "react";
import { useNavigate } from "react-router-dom";


 
export const Sidebar = ({ hideBar }: {hideBar: boolean}) => {
  // @ts-ignore
  const [User, setUser] = useState<any>(JSON.parse(localStorage.getItem("User") || 'null'))
  // @ts-ignore
  const [selectOuterIndex, setSelectOuterIndex] = useState<number>(0)
  // @ts-ignore
  const [selectInnerIndex, setSelectInnerIndex] = useState<number>(0)
  
    
 

  const navigate = useNavigate()

  
  // document.body.style.backgroundColor = '#F8F9FC'

  const newSideBarItems: {
    name: string;
    navigateLink?: string;
    bottemLine?: boolean | null;
    list?: {name: string, navigateLink?: string}[],
    icon?: (stroke: string | undefined, fill: string | undefined) => JSX.Element}[] = [
    { name: "Dashboard", navigateLink: "/Dashboard" },
    { name: "Customer", navigateLink: "/Customer"},
    { name: "Products and Services", navigateLink: "/ProductsAndServices"},
    { name: "Users Management", list: [{name: "User", navigateLink: "/UserList"}, {name: "Role", navigateLink: "/Role"}]},
    { name: "Settings", list: [{name: "API Settings", navigateLink: "/APISettings"}, {name: "Contact", navigateLink: "/Contact"}, {name: "Notification", navigateLink: "/Notification"}]},
    { name: "Compliance", list: [{name: "Sanction List", navigateLink: "/SanctionList"}, {name: "AML Checks", navigateLink: "/AMLChecks"}, {name: "AuditTrail", navigateLink: "/AuditTrail"}, {name: "Compliance Reporting", navigateLink: "/ComplianceReporting"}] },
    

  ]

  return (
    <div className={`flex flex-col z-20 ${hideBar ? "" : ""} 2xl:text-[18px] text-[14px]`}>
     <div className="">
      {/* <div>Outer {selectOuterIndex}</div>
      <div>Inner {selectInnerIndex}</div> */}
      {newSideBarItems.map((item: any, indexouter: number) => (
        <div key={indexouter} className="flex flex-col">
          <a
            onClick={e => {e.preventDefault(); setSelectOuterIndex(indexouter); item.navigateLink && navigate(item.navigateLink)}}
            className={`flex items-center gap-2 px-5 pt-1 ${item.navigateLink ? "cursor-pointer" : ""}`}
          >
            {item.name}
          </a>
          <div className="flex items-center">
            {item.list ? 
              <div className="flex flex-col gap-1 px-8">
                {item.list.map((listItem: any, indexinner: number) => (
                  <a key={indexinner}
                    onClick={e => {e.preventDefault(), setSelectOuterIndex(indexouter), setSelectInnerIndex(indexinner), listItem.navigateLink && navigate(listItem.navigateLink)}}
                    className={`${listItem.navigateLink ? "cursor-pointer" : ""}`} >
                    {listItem.name}
                  </a>
                ))}
              </div> : <></> }
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};
