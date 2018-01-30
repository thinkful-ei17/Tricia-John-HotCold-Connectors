import React from 'react';

export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  )
};

export const mapToStateProps = state => ({
  auralStatus: state.auralStatus
});

export default connect()(AuralStatus);
