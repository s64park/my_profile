import React from 'react';
import { Grid, Header, Icon, Container, Segment } from 'semantic-ui-react';

const Resume = () => {
    return (
        <div style={{ marginBottom: '70px' }}>
            <Header as='h1'>
                <Icon name='user' />
                <Header.Content>Resume</Header.Content>
            </Header>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Container>
                            <Header attached='top' as='h3' block>
                                <div>
                                    <Icon name='id badge' />
                                    <Header.Content>About me</Header.Content>
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    
                                    <Segment attached style={{ marginTop: '10px' }}>
                                        Praesent pellentesque hendrerit ipsum vitae rhoncus. Nullam porta placerat lorem eget iaculis. Sed auctor, magna at porta auctor, enim sapien commodo mauris, non lobortis ligula libero et felis. Suspendisse rutrum libero dui, a porta mi tincidunt quis. Etiam id semper dui. Proin id erat pellentesque, sagittis lectus nec, cursus dolor. Vivamus nec tortor orci. Quisque sit amet lobortis massa, ac posuere enim. Curabitur sagittis malesuada massa volutpat porttitor.
                                    </Segment>
                                </div>

                                <div>
                                    <div>
                                        <Icon name='paper plane' />
                                        <Header.Content>Service</Header.Content>
                                    </div>
                                    <Segment attached style={{ margin: '10px 0' }}>
                                        Praesent pellentesque hendrerit ipsum vitae rhoncus. Nullam porta placerat lorem eget iaculis. Sed auctor, magna at porta auctor, enim sapien commodo mauris, non lobortis ligula libero et felis. Suspendisse rutrum libero dui, a porta mi tincidunt quis. Etiam id semper dui. Proin id erat pellentesque, sagittis lectus nec, cursus dolor. Vivamus nec tortor orci. Quisque sit amet lobortis massa, ac posuere enim. Curabitur sagittis malesuada massa volutpat porttitor.
                                        </Segment>
                                </div>
                            </Header>
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Container></Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Resume;