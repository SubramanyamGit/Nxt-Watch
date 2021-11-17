import styled from 'styled-components'

export const VideoItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    width: 250px;
    margin-right: 20px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`
export const CustomContainer = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  margin-top: 20px;
`
export const ChannelImage = styled.img`
  height: 40px;
  margin-right: 20px;
`
export const CustomContainer2 = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#0f0f0f')};
  font-size: 14px;
  font-family: 'Roboto';
  margin-top: 0;
  margin-bottom: 5px;
`
export const List = styled.div`
  margin: 0;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const ListItem = styled.p`
  color: #475569;
  font-size: 13px;
  font-family: 'Roboto';
  margin: 5px;
`
