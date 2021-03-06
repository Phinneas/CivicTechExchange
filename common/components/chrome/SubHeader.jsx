// @flow

import type {SectionType} from '../enums/Section.js';

import SectionLinkConfigs from '../configs/SectionLinkConfigs.js';
import cx from '../utils/cx';
import SectionLink from './SectionLink.jsx';
import React from 'react';
import Section from '../enums/Section.js'

type Props = {|
  +activeSection: SectionType,
  +onChangeSection: (SectionType) => void,
|};

class SubHeader extends React.PureComponent<Props> {

  _cx: cx;

  constructor(): void {
    super();
    this._cx = new cx('SubHeader-');
  }

  render(): React$Node {
    return (
      <div className={this._cx.get('root')}>
        {this._renderSectionLinks()}
        <span className={this._cx.get('rightContent')}>
          <button
            className={this._cx.get('createProject')}
            >
            Create A Project
          </button>
        </span>
      </div>
    );
  }

  _renderSectionLinks(): React$Node {
    return SectionLinkConfigs
      .map(config =>
        <SectionLink
          activeSection={this.props.activeSection}
          key={config.title}
          section={config.section}
          title={config.title}
          onChangeSection={
            this.props.onChangeSection.bind(this, config.section)
          }
        />
      );
  }
}

export default SubHeader;
