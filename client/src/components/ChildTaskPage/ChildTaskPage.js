import React, { Component, Fragment } from 'react';
import Media from 'react-media';

import './ChildTaskPage.css';

export default class ChildTaskPage extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <header className="header"></header>

        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px) and (max-width: 1199px)',
            large: '(min-width: 1200px)',
          }}
        >
          {(matches) => (
            <Fragment>
              {matches.small && <div className="tasksInfo"></div>}                  
              {matches.medium && <div className="tasksInfo"></div>}
              {matches.large && (
                <div className="main">
                  <div className="familyInfo">
                  </div>
                  <div className="tasksInfo"></div>
                </div>
              )}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}