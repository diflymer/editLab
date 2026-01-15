import React from 'react';
import styled from 'styled-components';

const TeacherContainer = styled.section`
  padding: 80px 20px;
  margin: 40px 0;
`;

const TeacherCard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%);
  border-radius: 30px;
  padding: 50px 40px;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), 
                    linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(99, 102, 241, 0.2);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 24px;
    gap: 32px;
  }
`;

const TeacherPhotoContainer = styled.div`
  flex-shrink: 0;
  position: relative;
`;

const TeacherPhoto = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 24px;
  object-fit: cover;
  border: 5px solid;
  border-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1;
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  ${TeacherCard}:hover & {
    transform: scale(1.08);
    box-shadow: 0 16px 50px rgba(99, 102, 241, 0.4);
  }
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const TeacherInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`;

const TeacherTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #667eea;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const TeacherName = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TeacherStats = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 32px;
  }
`;

const TeacherStat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TeacherStatNumber = styled.div`
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const TeacherStatLabel = styled.div`
  font-size: 16px;
  color: #718096;
  font-weight: 500;
`;

export const TeacherBlock = () => {
  return (
    <TeacherContainer>
      <TeacherCard>
        <TeacherPhotoContainer>
          <TeacherPhoto 
            src="https://s.pfst.net/2017.04/563775667210bea715dd2dfcc25e7c9e01315bb2712e_b.jpg"
            alt="Преподаватель курса"
          />
        </TeacherPhotoContainer>
        <TeacherInfo>
          <TeacherTitle>Опытный преподаватель</TeacherTitle>
          <TeacherName>Алексей</TeacherName>
          <TeacherStats>
            <TeacherStat>
              <TeacherStatNumber>8+</TeacherStatNumber>
              <TeacherStatLabel>лет опыта</TeacherStatLabel>
            </TeacherStat>
            <TeacherStat>
              <TeacherStatNumber>500+</TeacherStatNumber>
              <TeacherStatLabel>проектов</TeacherStatLabel>
            </TeacherStat>
            <TeacherStat>
              <TeacherStatNumber>50M+</TeacherStatNumber>
              <TeacherStatLabel>просмотров</TeacherStatLabel>
            </TeacherStat>
          </TeacherStats>
        </TeacherInfo>
      </TeacherCard>
    </TeacherContainer>
  );
};
