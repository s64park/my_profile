import React from 'react';
import {
    Header, Icon, Grid, Container, Segment,
    Menu
} from 'semantic-ui-react';

import AccordionMenu from './AccordionMenu';

const ServiceMenuCompact = ({ activeItem, handleItemClick }) => {
    return (
        <Menu compact icon='labeled' size='mini' style={{ marginTop: '10px' }}>
            <Menu.Item name='petever' active={activeItem === 'petever'} onClick={handleItemClick}>
                <Icon name='paw' size='mini' />
                Petever
            </Menu.Item>

            <Menu.Item
                name='qualityx'
                active={activeItem === 'qualityx'}
                onClick={handleItemClick}
            >
                <Icon name='sync' size='mini' />
                QualityX
            </Menu.Item>

            <Menu.Item
                name='Wegether'
                active={activeItem === 'Wegether'}
                onClick={handleItemClick}
            >
                <Icon name='users' size='mini' />
                Wegether
            </Menu.Item>
        </Menu>

    );

}

class Profile extends React.Component {
    state = { activeItem: null }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return (
            <div style={{ marginBottom: '70px'}}>
                <Header as='h1'>
                    <Icon name='user' />
                    <Header.Content>Profile</Header.Content>
                </Header>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Container>
                                <Header attached='top' as='h3' block>
                                    <div style={{ marginBottom: '20px' }}>
                                        <Icon name='id badge' />
                                        <Header.Content>About me</Header.Content>
                                        <Segment attached style={{ marginTop: '10px' }}>
                                            Praesent pellentesque hendrerit ipsum vitae rhoncus. Nullam porta placerat lorem eget iaculis. Sed auctor, magna at porta auctor, enim sapien commodo mauris, non lobortis ligula libero et felis. Suspendisse rutrum libero dui, a porta mi tincidunt quis. Etiam id semper dui. Proin id erat pellentesque, sagittis lectus nec, cursus dolor. Vivamus nec tortor orci. Quisque sit amet lobortis massa, ac posuere enim. Curabitur sagittis malesuada massa volutpat porttitor.
                                    </Segment>
                                    </div>

                                    <div>
                                        <div>
                                            <Icon name='paper plane' />
                                            <Header.Content>Service</Header.Content>
                                        </div>
                                        <ServiceMenuCompact activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} />
                                        <Segment attached style={{ margin: '10px 0' }}>
                                            Praesent pellentesque hendrerit ipsum vitae rhoncus. Nullam porta placerat lorem eget iaculis. Sed auctor, magna at porta auctor, enim sapien commodo mauris, non lobortis ligula libero et felis. Suspendisse rutrum libero dui, a porta mi tincidunt quis. Etiam id semper dui. Proin id erat pellentesque, sagittis lectus nec, cursus dolor. Vivamus nec tortor orci. Quisque sit amet lobortis massa, ac posuere enim. Curabitur sagittis malesuada massa volutpat porttitor.
                                        </Segment>

                                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/HUtrIbkhoh4" frameborder="0" rel="noopener noreferrer" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </Header>
                            </Container>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Container>
                                <Header as='h3'>
                                    <div>
                                        <Icon name='star' />
                                        <Header.Content>Main Tech Skills</Header.Content>
                                    </div>
                                </Header>
                                <AccordionMenu />

                                <Header as='h3' style={{ marginTop: '20px' }}>
                                    <div>
                                        <Icon name='clipboard list' />
                                        <Header.Content>Latest Activities</Header.Content>

                                        <Segment>
                                            Praesent pellentesque hendrerit ipsum vitae rhoncus. Nullam porta placerat lorem eget iaculis. Sed auctor, magna at porta auctor, enim sapien commodo mauris, non lobortis ligula libero et felis. Suspendisse rutrum libero dui, a porta mi tincidunt quis. Etiam id semper dui. Proin id erat pellentesque, sagittis lectus nec, cursus dolor. Vivamus nec tortor orci. Quisque sit amet lobortis massa, ac posuere enim. Curabitur sagittis malesuada massa volutpat porttitor.
                                    </Segment>
                                    </div>
                                </Header>
                            </Container>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Profile;