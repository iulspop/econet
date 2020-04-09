import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecorativeLine, FlexColumn } from "./home/common"
import { BulletList, ListItemGreen, ListItemBrown } from "./services/common"

export const RegionsPage = () => {
  const { t } = useTranslation(["RegionsPage", "Links"])
  return (
    <FlexColumn>
      <DecorativeLine isPageTop="true" />
      <Container>
        <H1>{t("h1")}</H1>
        <Flex>
          <ListContainer>
            <H2>{t("listMontreal")}</H2>
            <StyledBulletList>
              <ListItemGreen>Beaconsfield</ListItemGreen>
              <ListItemBrown>Baie d'Urfé</ListItemBrown>
              <ListItemGreen>Côte-Saint-Luc</ListItemGreen>
              <ListItemBrown>Hampstead</ListItemBrown>
              <ListItemGreen>Dollard-des-Ormeaux</ListItemGreen>
              <ListItemBrown>Dorval</ListItemBrown>
              <ListItemGreen>Kirkland</ListItemGreen>
              <ListItemBrown>L'Île-Dorval</ListItemBrown>
              <ListItemGreen>Montéal-Ouest</ListItemGreen>
              <ListItemBrown>Montréal</ListItemBrown>
              <ListItemGreen>Mont-Royal</ListItemGreen>
              <ListItemBrown>Pointe-Claire</ListItemBrown>
              <ListItemGreen>Sainte-Anne-de-Bellevue</ListItemGreen>
              <ListItemBrown>Senneville</ListItemBrown>
              <ListItemGreen>Westmount</ListItemGreen>
            </StyledBulletList>
          </ListContainer>

          <ListContainer>
            <Laval>{t("listLaval")}</Laval>
          </ListContainer>

          <ListContainer>
            <H2>{t("listLongeuil")}</H2>
            <StyledBulletList>
              <ListItemGreen>Boucherville</ListItemGreen>
              <ListItemBrown>Brossard</ListItemBrown>
              <ListItemGreen>Longeuil</ListItemGreen>
              <ListItemBrown>Saint-Bruno-De-Montarville</ListItemBrown>
              <ListItemGreen>Saint-Lambert</ListItemGreen>
            </StyledBulletList>
          </ListContainer>

          <ListContainer>
            <H2>{t("listRichelieu")}</H2>
            <StyledBulletList>
              <ListItemGreen>Beloeuil</ListItemGreen>
              <ListItemBrown>Carignon</ListItemBrown>
              <ListItemGreen>Chambly</ListItemGreen>
              <ListItemBrown>McMasterville</ListItemBrown>
              <ListItemGreen>Mont-Saint-Hilaire</ListItemGreen>
              <ListItemBrown>Otterburn Park</ListItemBrown>
              <ListItemGreen>Saint-Antoine-sur-Richelieu</ListItemGreen>
              <ListItemBrown>Saint-Basile-le-Grand</ListItemBrown>
              <ListItemGreen>Saint-Charles-sur-Richelieu</ListItemGreen>
              <ListItemBrown>Saint-Denis-sur-Richelieu</ListItemBrown>
              <ListItemGreen>Saint-Jean-Baptiste</ListItemGreen>
              <ListItemBrown>Saint-Marc-sur-Richelieu</ListItemBrown>
              <ListItemGreen>Saint-Mathieu-Dé-Beloeil</ListItemGreen>
            </StyledBulletList>
          </ListContainer>

          <ListContainer>
            <H2>{t("listMarguerite")}</H2>
            <StyledBulletList>
              <ListItemGreen>Calixa-Lavallée</ListItemGreen>
              <ListItemBrown>Contrecoeur</ListItemBrown>
              <ListItemGreen>Saint-Amable</ListItemGreen>
              <ListItemBrown>Sainte-Julie</ListItemBrown>
              <ListItemGreen>Varennes</ListItemGreen>
              <ListItemBrown>Verchères</ListItemBrown>
            </StyledBulletList>
          </ListContainer>

          <ListContainer>
            <H2>{t("listRoussillon")}</H2>
            <StyledBulletList>
              <ListItemGreen>Candiac</ListItemGreen>
              <ListItemBrown>Châteauguay</ListItemBrown>
              <ListItemGreen>Delson</ListItemGreen>
              <ListItemBrown>Kahnawake</ListItemBrown>
              <ListItemGreen>La Prairie</ListItemGreen>
              <ListItemBrown>Léry</ListItemBrown>
              <ListItemGreen>Mercier</ListItemGreen>
              <ListItemBrown>Saint-Constant</ListItemBrown>
              <ListItemGreen>Saint-Isidore</ListItemGreen>
              <ListItemBrown>Saint-Mathieu</ListItemBrown>
              <ListItemGreen>Saint-Phillipe</ListItemGreen>
              <ListItemBrown>Saint-Catherine</ListItemBrown>
            </StyledBulletList>
          </ListContainer>
        </Flex>
      </Container>
    </FlexColumn>
  )
}

const Container = styled.div`
  margin-top: 2rem;
  width: 90vw;
`

const H1 = styled.h1`
  font-size: 5rem;
  line-height: 1.3;
  margin-bottom: 3rem;

  @media only screen and ${props => props.theme.media.tabPort} {
    font-size: calc(0.045 * 100vw + 1.5rem);
  }
`

const Flex = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: 950px;

  @media only screen and ${props => props.theme.media.tabLand} {
    max-height: 1800px;
  }

  @media only screen and (max-width: 880px) {
    max-height: unset;
  }
`

const ListContainer = styled.div`
  margin-right: 3rem;
`

const StyledBulletList = styled(BulletList)`
  margin-left: 2.5rem;
`

const H2 = styled.h2`
  font-size: 2.5rem;
`

const Laval = styled(H2)`
  margin-bottom: 3rem;
`
