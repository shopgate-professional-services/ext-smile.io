import React from 'react';
import Proptypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '@shopgate/engage/components';
import styles from './styles';

/**
 * BaseSmileLink component
 * @param {[string]} iconImage Src for image
 * @param {[string]} headline Text for headline
 * @param {[string]} description Text for description
 * @param {[string]} href Link href
 * @param {[Node]} CallToAction Node to append to end of link
 * @return {JSX}
 * @constructor
 */
const BaseSmileLink = ({
  iconImage,
  headline,
  description,
  href,
  CallToAction,
  muted,
}) => {
  const isMuted = classNames(
    styles.contentWrapper,
    { [styles.muteWrapper]: muted }
  );

  const content = (
    <div className={isMuted}>
      <div className={styles.contentItem}>
        <div className={styles.baseContent}>
          {iconImage && (
            <div className={styles.image}>
              <img src={iconImage} alt={headline || description} />
            </div>
          )}
          <div>
            {headline && <div className={styles.headline}>{headline}</div>}
            {description && <div className={styles.muted}>{description}</div>}
          </div>
        </div>
        {CallToAction && (
          CallToAction
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  return content;
};

BaseSmileLink.propTypes = {
  CallToAction: Proptypes.node,
  description: Proptypes.string,
  headline: Proptypes.string,
  href: Proptypes.string,
  iconImage: Proptypes.string,
};

BaseSmileLink.defaultProps = {
  CallToAction: null,
  description: null,
  headline: null,
  href: null,
  iconImage: null,
};

export default BaseSmileLink;

