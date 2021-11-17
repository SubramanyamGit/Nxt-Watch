import styled from 'styled-components'

export const VideoItem = styled.li`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f8fafc')};
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 10px;
  margin-bottom: 30px;
  width: 150px;
  @media screen and (min-width: 500px) {
    width: 180px;
    margin: 5px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const Thumbnail = styled.img`
  height: 190px;
  border-radius: 10px;
  @media screen and (min-width: 500px) {
    height: 250px;
    width: 180px;
  }
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 200px;
  }
`
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Name = styled.p`
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#0f0f0f')};
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 0;
`
export const Para = styled.p`
  color: #64748b;
  font-size: 12px;
  font-family: 'Roboto';
  margin-top: 5px;
  margin-bottom: 0px;
  width: 100px;
  line-height: 1.5;
  @media screen and (min-width: 500px) {
    width: 200px;
  }
`
