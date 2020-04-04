import React from "react"
// import { useTranslation } from "react-i18next"
import {
  FlexColumn,
  DecorativeLine,
  ListAndImageFlex,
  SideImage,
  ListContainer,
  SectionHeading,
} from "../home/common"
import {
  Paragraph,
  BulletList,
  ListItemGreen,
  ListItemBrown,
  ButtonContainer,
} from "./common"
import { DecoratedButton } from "../common"

export const FurnitureResidential = () => {
  // const { t } = useTranslation("Confirmation")
  return (
    <FlexColumn>
      <DecorativeLine />
      <ListAndImageFlex>
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
          <ButtonContainer>
            <DecoratedButton left right slim>
              Hello
            </DecoratedButton>
          </ButtonContainer>
        </ListContainer>
        <SideImage
          ariaLabel="carpet cleaning technician handling cleaning machine"
          url="/assets/carpet-cleaning.jpg"
        />
      </ListAndImageFlex>
    </FlexColumn>
  )
}
