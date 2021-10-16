import React from 'react';

const App = React.memo(({ children }) =>
    <div>
        {children}
    </div>
);

export default App;