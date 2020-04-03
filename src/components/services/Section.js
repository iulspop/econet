import React from "react"
import styled from "styled-components"
// import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  ListAndImageFlex,
  SideImage,
  ListContainer,
  SectionHeading,
} from "../home/common"

export const Section = () => {
  // const { t } = useTranslation("Confirmation")
  return (
    <StyledFlexColumn>
      <ListAndImageFlex reverseWrap="true">
        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          url="/assets/carpet-cleaning.jpg"
        />
        <ListContainer>
          <SectionHeading id="tapis">
            Residential Carpet Cleaning
          </SectionHeading>
          <Paragraph>
            In addition to keeping you warm, being comfortable and reducing
            noise, your carpets act like filters that retain dust and allergens,
            and prevent them from being in suspension in your home. In order to
            do their job properly, they must be vacuumed regularly and cleaned
            professionally once or twice a year. Nettoyage Éconet's complete
            carpet cleaning services keeps your carpets clean and looking good
            for years to come.
          </Paragraph>
          <strong>Our professional carpet cleaning service includes:</strong>
          <BulletList>
            <ListItemGreen>Carpet pre-treatment</ListItemGreen>
            <ListItemBrown>Low-moisture carpet cleaning</ListItemBrown>
            <ListItemGreen>Basic spot removal</ListItemGreen>
            <ListItemBrown>Basic odour control</ListItemBrown>
          </BulletList>
          <strong>We also offer the following additional services:</strong>
          <BulletList>
            <ListItemGreen>Vacuuming using power-vacuum</ListItemGreen>
            <ListItemBrown>Advanced spot removal</ListItemBrown>
            <ListItemGreen>Advanced odour control</ListItemGreen>
            <ListItemBrown>
              Écological carpet protector application
            </ListItemBrown>
          </BulletList>
        </ListContainer>
      </ListAndImageFlex>
    </StyledFlexColumn>
  )
}

const StyledFlexColumn = styled(FlexColumn)``

const Paragraph = styled.p`
  margin-bottom: 2rem;
`

const BulletList = styled.ul`
  list-style: none;
  margin-left: 2.5rem;
  margin-bottom: 3rem;
`

const ListItemGreen = styled.li`
  position: relative;
  line-height: 1.5;
  margin-bottom: 1rem;

  &::before {
    content: " ";
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};

    position: absolute;
    top: 53%;
    transform: translateY(-50%);
    left: -2.4rem;
  }
`

const ListItemBrown = styled(ListItemGreen)`
  &::before {
    background-color: ${props => props.theme.colors.secondary};
  }
`
