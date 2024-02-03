import React from "react";

function BreadCrumb({ page }) {
  return (
    <div className="page-title-area item-bg-2">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>{page.title}</h2>
              <ul>
                <li>
                  <a href={page.previousUrl}>{page.previousTitle}</a>
                </li>
                <li>{page.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
