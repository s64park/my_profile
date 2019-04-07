import React from 'react';
import { Header, Image, Icon, Grid, Segment } from 'semantic-ui-react';


const Introduction = () => {
    return (
        <div style={{ marginBottom: '70px'}}>
            <Header as='h1' style={{ marginTop: 0 }}>
                <div style={{ marginBottom: '15px' }}>
                    <Image src="./images/sample_profile.jpeg" fluid centered />
                </div>
                <Grid>
                    <Grid.Column floated='left' width={5}>
                        <Header.Content>Danny park</Header.Content>
                        <Header.Subheader>Programmer & Product Manager</Header.Subheader>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <div style={{ float: 'right'}}>
                            <a href="https://www.facebook.com/danny.park.104" target="_blank" rel="noopener noreferrer"><Icon circular link color='blue' name='facebook square' /></a>
                            <a href="https://www.linkedin.com/in/sanghyun-park-86a05344/" target="_blank" rel="noopener noreferrer"><Icon circular link color='violet' name='linkedin square' /></a>
                            <a href="#"><Icon circular link color="teal" name='twitter square' /></a>
                            <a href="https://www.instagram.com/s64park/" target="_blank" rel="noopener noreferrer"><Icon circular link name='instagram' style={{ marginRight: 0}} /></a>
                        </div>
                    </Grid.Column>
                </Grid>

                <Header as='h3' block>
                    <Header.Content>Introduction</Header.Content>
                    <Segment>
                    Praesent pellentesque hendrerit ipsum vitae rhoncus. Nullam porta placerat lorem eget iaculis. Sed auctor, magna at porta auctor, enim sapien commodo mauris, non lobortis ligula libero et felis. Suspendisse rutrum libero dui, a porta mi tincidunt quis. Etiam id semper dui. Proin id erat pellentesque, sagittis lectus nec, cursus dolor. Vivamus nec tortor orci. Quisque sit amet lobortis massa, ac posuere enim. Curabitur sagittis malesuada massa volutpat porttitor. Pellentesque ac nibh libero. Donec pellentesque, orci nec varius vehicula, sem nisi mattis tellus, et imperdiet turpis ipsum lacinia orci.        
                    </Segment>
                </Header>
            </Header>
        </div>
        
    );
}


export default Introduction;