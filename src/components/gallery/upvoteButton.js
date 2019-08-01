import React from 'react';
import axios from 'axios';
import { Label, Button, Icon } from 'semantic-ui-react';

function UpvoteButton (){
    return (
<div style={{likeContainer}}>
            <Label>9 likes</Label>
            <Button circular icon><Icon name="like"/></Button>
</div>
    )
}

const likeContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100px'
}

export default UpvoteButton;