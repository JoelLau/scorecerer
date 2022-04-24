import { Message } from '@scorecerer/api-interfaces';
import React, { useEffect, useState } from 'react';
import NxWelcome from './nx-welcome';

export const App = () => {
  const [{ title }, setMessage] = useState<Message>({ title: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return <NxWelcome title={title}></NxWelcome>;
};

export default App;
