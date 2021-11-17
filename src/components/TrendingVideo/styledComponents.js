import styled from 'styled-components'

export const VideoItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`
export const Thumbnail = styled.img`
  height: 200px;
  width: 100%;
  @media screen and (min-width: 500px) {
    margin-right: 20px;
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 20px;
    width: 350px;
  }
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
  @media screen and (min-width: 500px) {
    align-items: flex-start;
`
export const ChannelImage = styled.img`
  height: 50px;
  margin-right: 20px;
  @media screen and (min-width: 500px) {
    display: none;
  }
`
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ChannelName = styled.p`
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#000000')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin-bottom: 5px;
  margin-left: 5px;
`
export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  align-items: center;
`
export const ListItem = styled.p`
  color: #64748b;
  font-size: 14px;
  font-family: 'Roboto';
  list-style-type: disc;
  margin: 5px;
  line-height: 1.6;
`
