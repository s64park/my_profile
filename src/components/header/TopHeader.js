import React, { createRef } from 'react';
import { Menu, Button, Image } from 'semantic-ui-react';

// Sticky by using Sticky and Ref components
class TopHeader extends React.Component {
    contextRef = createRef();
    render() {
        return (
            <Menu size='small'>
                <Menu.Item>
                    <Image
                        src='./images/sample_logo.jpg'
                        as='a'
                        size='small'
                        href='http://google.com'
                        target='_blank'
                    />
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button.Group>
                            <Button positive>Check Me</Button>
                                <Button.Or />
                            <Button>Pass Me</Button>
                        </Button.Group>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
};

export default TopHeader