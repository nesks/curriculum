import React, { useState } from 'react';
import { WindowDropDowns, Google } from 'components';



const Camp = () => {
    const [state, setState] = useState({
        route: 'main',
        query: '',
      });

    return(
    <div className="ie__content__inner">
          <Google
            route={state.route}
            query={state.query}
          />
        </div> 
    );
};


export default Camp;