import React from "react";
import headerBackground from "./assets/img/headerBackground.jpg";

function BreadCrumb({ page }) {
  return (
    <div className="page-title-area item-bg-2">
      <div
        className="d-table"
        style={{ background: `url(${headerBackground})` }}
      >
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>{page.title}</h2>
              <ul>
                <li>
                  <a href={page.previousUrl}>{page.previousTitle}</a>
                </li>
                <li>{page.subTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
