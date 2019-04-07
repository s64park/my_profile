import React, { Component } from 'react';
import { Accordion, Icon} from 'semantic-ui-react';

export default class AccordionMenu extends Component {
    state = { activeIndex: 0 }
  
    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }
  
    render() {
      const { activeIndex } = this.state
  
      return (
        <Accordion styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Artificial Intelligence
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
              be found as a welcome guest in many households across the world.
            </p>
          </Accordion.Content>
  
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Web Development
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              There are many breeds of dogs. Each breed varies in size and temperament. Owners often
              select a breed of dog that they find to be compatible with their own lifestyle and
              desires from a companion.
            </p>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Mobile Development
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              There are many breeds of dogs. Each breed varies in size and temperament. Owners often
              select a breed of dog that they find to be compatible with their own lifestyle and
              desires from a companion.
            </p>
          </Accordion.Content>
  
          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Data Archetecture
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              Three common ways for a prospective owner to acquire a dog is from pet shops, private
              owners, or shelters.
            </p>
            <p>
              A pet shop may be the most convenient way to buy a dog. Buying a dog from a private
              owner allows you to assess the pedigree and upbringing of your dog before choosing to
              take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog
              who may not find one so readily.
            </p>
          </Accordion.Content>
        </Accordion>
      )
    }
  }