import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { DecoratedButton } from "../components/common/DecoratedButton"

export const ServiceList = () => {
  const { t } = useTranslation("ServiceList")
  return (
    <FlexColumn>
      <DecorativeLine src={"/assets/decorative-horizontal-line.png"} alt={""} />
      <Container>
        <H3>{t("h3")}</H3>
        <Flex>
          <div>
            <Flex>
              <LeftList>
                <ListItemGreen>{t("listItem1")}</ListItemGreen>
                <ListItemBrown>{t("listItem2")}</ListItemBrown>
                <ListItemGreen>{t("listItem3")}</ListItemGreen>
                <ListItemBrown>{t("listItem4")}</ListItemBrown>
                <ListItemGreen>{t("listItem5")}</ListItemGreen>
              </LeftList>
              <List>
                <ListItemGreen>{t("listItem6")}</ListItemGreen>
                <ListItemBrown>{t("listItem7")}</ListItemBrown>
                <ListItemGreen>{t("listItem8")}</ListItemGreen>
                <ListItemBrown>{t("listItem9")}</ListItemBrown>
                <ListItemGreen>{t("listItem10")}</ListItemGreen>
              </List>
            </Flex>
            <ButtonContainer>
              <DecoratedButton left right link href="/services">
                {t("button")}
              </DecoratedButton>
            </ButtonContainer>
          </div>
          <ImageContainer>
            <div>
              <img src="/assets/biopic.png" alt="{t('figcaption')}" />
              <FigCaption>{t("figCaption")}</FigCaption>
            </div>
          </ImageContainer>
        </Flex>
      </Container>
    </FlexColumn>
  )
}

const FlexColumn = styled.div`
  padding: 7rem 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DecorativeLine = styled.img`
  width: 80vw;
`

const Container = styled.div`
  width: 80vw;
  font-size: 3.4rem;
`

const H3 = styled.h3`
  font-size: 6rem;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ButtonContainer = styled.div`
  width: 500px;
  margin: 8rem auto;
`

const List = styled.ul`
  list-style-position: inside;
  margin: 6rem 3rem;
`

const LeftList = styled(List)`
  margin-left: 0rem;
`

const ListItemGreen = styled.li`
  &::marker {
    color: ${props => props.theme.colors.primary};
  }
`

const ListItemBrown = styled.li`
  &::marker {
    color: ${props => props.theme.colors.secondary};
  }
`

const ImageContainer = styled.figure`
  margin: 4rem 3rem;
  display: flex;
  justify-content: center;
`

const FigCaption = styled.figcaption`
  text-align: center;
  font-size: 1.9rem;
`
