import React from 'react'
import { Icon, Collapsible, CollapsibleItem } from 'react-materialize'
export default function About() {
    return (
        <Collapsible className='about-nav'
  accordion
  popout
>
  <CollapsibleItem
    expanded={false}
    header="Introduction"
    icon={<Icon>diversity_3</Icon>}
    node="div"
  >
    We are a team dedicated to providing the latest movies quickly with hundreds of new movies every day.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Service"
    icon={<Icon>design_services</Icon>}
    node="div"
  >
    We provide users with movies at an extremely fast speed, giving users the best experience, watching movies without lag, watching full hd feel high like in a movie theater.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Contact"
    icon={<Icon>perm_phone_msg</Icon>}
    node="div"
  >
    Location: Home Cinema<br/>
    Phone: XXXXXXXXXX<br/>
    Email: XXX@gmail.com
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Criteria"
    icon={<Icon>share</Icon>}
    node="div"
  >
    Fast, Feel hight & Full hd uncensored
  </CollapsibleItem>
</Collapsible>
    )
}
