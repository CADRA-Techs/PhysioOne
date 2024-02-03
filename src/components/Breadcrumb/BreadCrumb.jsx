import React from "react";

function BreadCrumb({ page }) {
  return (
    <div class="page-title-area item-bg-2">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="page-title-content">
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
