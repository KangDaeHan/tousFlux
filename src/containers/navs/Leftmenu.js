import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const LeftMenu = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => (
    menuCollapse ? setMenuCollapse( false ) : setMenuCollapse( true )
  )
  
  return (
    <>
      <div className="left-menu">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <button type="button" className="closemenu" onClick={menuIconClick} onKeyDown={menuIconClick}>
              {menuCollapse ? (
                <span className="folding_on">열기</span>
              ) : (
                <span className="folding_off">닫기</span>
              )}
            </button>
          </SidebarHeader>
          <SidebarContent>
            <Menu>
              <MenuItem active>FASHION</MenuItem>
              <MenuItem>COSMETIC / BEAUTY</MenuItem>
              <MenuItem>GROCERIES</MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default LeftMenu;