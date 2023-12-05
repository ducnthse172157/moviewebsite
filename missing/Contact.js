import React from 'react'
import{Container, TextInput, Select,Textarea,Button, Icon} from 'react-materialize'
export default function Contact(){
  const handleSubmit =(e)=> {
    e.preventDefault()
  }

    return (
      <Container className='contact-menu'>
        
          <h3>What Do You Need</h3>
        <form onSubmit={handleSubmit}>
          <TextInput className='input' id="TextInput-38" label="Your Name"/>
          <TextInput className='input' id="TextInput-39" label="Your Phone"/>
          <TextInput className='input' email id="TextInput-41" label="Email" validate/>
          <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
            <option disabled value="">
              Choose your favorite pet
            </option>
            <option value="1">
              Cat
            </option>
            <option value="2">
              Dog
            </option>
            <option value="3">
              Bird
            </option>
            <option value="4">
              Turtle
            </option>
          </Select>
          <Textarea className='input' icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content"></Textarea>
          <Button className='Subbt'>Submit</Button>
        </form>
      </Container>
    )
  }
