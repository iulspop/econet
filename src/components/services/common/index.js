import styled from "styled-components"

export const Paragraph = styled.p`
  margin-bottom: 2rem;
`

export const BulletList = styled.ul`
  list-style: none;
  margin-left: 2.5rem;
  margin-bottom: 3rem;
`

export const ListItemGreen = styled.li`
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
    top: 0.9rem;
    left: -2.4rem;
  }
`

export const ListItemBrown = styled(ListItemGreen)`
  &::before {
    background-color: ${props => props.theme.colors.secondary};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
