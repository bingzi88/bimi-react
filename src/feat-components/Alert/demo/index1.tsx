import React from 'react';
import Alert from '..';

export default () => {
  return (
    <div>
      <h1>Alert Component</h1>
      <Alert type="success" message="This is a success message." />
      <Alert type="info" message="This is an info message." />
      <Alert type="warning" message="This is a warning message." />
      <Alert type="error" message="This is an error message." />
    </div>
  );
};
