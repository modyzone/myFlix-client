import React from 'react';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Inception', Description: 'desc1...', ImagePath: '...' },
                { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', ImagePath: '...' },
                { _id: 3, Title: 'Gladiator', Description: 'desc2...', ImagePath: '...' }
            ]
        }
    }

render() {
    return (
        <div className="main-view">
            <div>Inception</div>
            <div>The Shawshank Redemption</div>
            <div>Gladiator</div>
        </div>
    );
       }
}
export default MainView;

// Import statement to indicate that you need to bundle `./index.scss`
import '../../index.scss';
   